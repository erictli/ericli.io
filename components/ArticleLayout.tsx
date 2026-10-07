import { MUTED, TEXT } from "@/lib/theme-classes";

interface ArticleLayoutProps {
  article: {
    title: string;
    date: string;
    readTime: string;
  };
  /** The picture the article opens with, set above the title. */
  hero?: { src: string; alt: string };
  children: React.ReactNode;
}

// The reading's colors for both schemes: Typography's neutral palette, and
// its inverted one when the system is dark, with list markers at half
// strength either way.
const PROSE_COLORS = [
  "prose-neutral [--tw-prose-bullets:rgb(68_64_60/0.5)] [--tw-prose-counters:rgb(68_64_60/0.5)]",
  "prose-headings:text-neutral-950 prose-p:text-neutral-950 prose-strong:text-neutral-950 prose-li:text-neutral-950",
  "prose-a:text-neutral-950 prose-a:border-neutral-950/20 prose-a:hover:border-neutral-950/30 prose-a:focus-visible:bg-neutral-950/10",
  "prose-blockquote:text-neutral-950/70 prose-blockquote:border-neutral-950/10 prose-hr:border-neutral-950/10",
  "dark:prose-invert dark:[--tw-prose-bullets:rgb(255_255_255/0.5)] dark:[--tw-prose-counters:rgb(255_255_255/0.5)]",
  "dark:prose-headings:text-white dark:prose-p:text-white/80 dark:prose-strong:text-white dark:prose-li:text-white",
  "dark:prose-a:text-white dark:prose-a:border-white/20 dark:prose-a:hover:border-white/30 dark:prose-a:focus-visible:bg-white/20",
  "dark:prose-blockquote:text-white/70 dark:prose-blockquote:border-white/10 dark:prose-hr:border-white/10",
].join(" ");

const PROSE_SHAPE = [
  "prose max-w-none text-base font-normal",
  "prose-headings:font-medium prose-headings:text-base prose-h2:text-lg prose-h2:leading-snug prose-h2:mt-12 prose-h2:mb-3 prose-h3:mt-6 prose-h3:mb-2",
  "prose-p:my-4 prose-p:leading-[1.7]",
  "prose-a:no-underline prose-a:border-b prose-a:border-dotted prose-a:pb-0.5 prose-a:font-normal prose-a:transition-opacity prose-a:hover:opacity-60 prose-a:focus-visible:outline-none",
  "prose-strong:font-medium",
  "prose-ul:my-4 prose-ol:my-4 prose-ol:pl-5 prose-ul:pl-5 prose-li:pl-0.5 prose-li:my-2 prose-li:leading-[1.75]",
  "prose-blockquote:font-normal prose-blockquote:border-l-2 prose-blockquote:pl-4 prose-blockquote:my-6",
  "prose-hr:my-8 prose-hr:border-dotted",
  "prose-video:my-8",
].join(" ");

/**
 * An article: its picture first, then the title with the date and reading
 * time quiet under it, then the reading. Two sizes of text below the
 * title: body and small. Rendered on the server in both schemes' colors,
 * so the words are there on the first paint.
 */
export default function ArticleLayout({
  article,
  hero,
  children,
}: ArticleLayoutProps) {
  return (
    <main className={`min-h-screen overflow-x-clip font-sans ${TEXT}`}>
      <div className="max-w-160 mx-auto px-6 pt-20 pb-32 sm:pb-48">
        <article>
          {hero && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={hero.src} alt={hero.alt} className="mb-8 block w-full" />
          )}
          <header className="mb-8">
            <h1 className="text-2xl leading-tight font-[450] tracking-[-0.015em]">
              {article.title}
            </h1>
            <div
              className={`mt-2 flex items-center gap-3 text-sm font-normal tabular-nums ${MUTED}`}
            >
              {/* Dates are calendar days; read them as UTC so they don't slip a day west of Greenwich. */}
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  timeZone: "UTC",
                })}
              </time>
              <span>{article.readTime}</span>
            </div>
          </header>

          <div className={`${PROSE_SHAPE} ${PROSE_COLORS}`}>{children}</div>
        </article>
      </div>
    </main>
  );
}
