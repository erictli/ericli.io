This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Data stories

Interactive articles built on data, like [/writing/nyc-marathon](app/writing/nyc-marathon/page.tsx), are routes of their own instead of markdown. A new story copies the marathon's structure:

- **Listing.** `articles/<slug>.md` with `standalone: true` and a `readTime` keeps the story in Writing, the feed and the sitemap; `app/writing/[slug]` skips it.
- **Route.** `app/writing/<slug>/page.tsx` is a server component: metadata and JSON-LD, then the copy as JSX, with `ArticleHeader` and `PROSE` from `components/ArticleLayout.tsx` so the text looks like every other article. Sections that break out of the text column (a sticky scene, wide figures) sit between prose blocks. `layout.tsx` imports the route's CSS.
- **Facts on the server.** The page reads the story's JSON from `public/` (`readPublicJSON`, `lib/stories/server.ts`) and computes every number in the copy (`lib/marathon/facts.js`), with a `copyCheck` for each sentence's premise. The numbers are in the HTML, and the checks print `[copy check]` warnings during `next build`. `readTimeOf(...)` counts the copy's own words for the header, and the page checks the `.md` file's `readTime` against it.
- **Data.** `public/writing/<slug>/data/`: read by the page at render, fetched by the client module in the browser.
- **Root and loader.** A client component (`components/marathon/MarathonStory.tsx`) wraps the server-rendered story, creates its store, and loads the client module with `import()` in an effect, so heavy libraries (deck.gl, d3) load only on that route.
- **Client module.** `lib/marathon/story.js` exports `mountMarathon(root, { data, store })`, which returns `{ destroy }`. It only looks inside `root`. Every listener, observer, timer, frame and node it adds goes through `createCleanup()` (`lib/stories/client.js`), so `destroy()` undoes all of it, including deck.gl and its WebGL context. Strict Mode's double mount and client-side navigation depend on that.
- **UI in React and Tailwind.** Everything the page renders, including UI the client module drives (the caption card and its panels, the menu, a chart's key, the loading state), is React styled with Tailwind. It reads the story's store (`lib/stories/store.ts`, `useSyncExternalStore`), and the module writes to it only when a value changes. Anything that changes every frame, like a progress bar, goes through a ref.
- **What code draws.** SVG drawn by d3 or by hand gets Tailwind classes from JS, written out as literal strings so Tailwind finds them (`lib/marathon/ui.js`). Only DOM positioned every frame (the deck.gl canvas, map labels) keeps CSS, in the route's CSS file, scoped under the story's root class: route CSS stays loaded after navigating away.
- **Colors.** Tokens with light and dark values in the route's CSS on `:root`, prefixed (`--marathon-*`), registered as Tailwind colors in `app/globals.css` (`--color-marathon-ink: var(--marathon-ink)`), so `text-marathon-ink-3` works in JSX and in JS.
- **Screenshots.** With the dev server running (`next dev -p 3017`), `?step=N` opens on step N with the scene settled and `?still=<preset>` draws only the scene; the story's root sets `data-step-ready` or `data-still-ready` when done. `scripts/capture-variants.mjs` and `scripts/capture-og.mjs` use them.
