---
title: "Beyond vibe coding: practical tips for designers building with AI"
description: "A practical guide for designers looking to effectively use AI coding tools beyond surface-level experimentation, featuring clear strategies and actionable tips for integrating AI into your development workflow."
date: "2025-06-25"
image: "/writing/vibe-coding.png"
---

![](/writing/vibe-coding.png)

_Written in June 2025. Things are changing quickly, so if you're reading this later, some of the specifics may no longer apply._

With the rise of AI-powered coding tools like Cursor, I'm seeing more and more designers diving into development. Unfortunately, the results are mixed. Every day, I see posts that fall into one of two buckets:

1. AI coding is magical, I'm basically an engineer now.
2. AI coding is unusable, it sucks at design and isn't ready for production.

## Why the divergence?

I believe the key lies in how people are using these tools. Tools like Cursor give users a lot of autonomy and very little structure. You can type whatever you want into the chat. You can make line-by-line adjustments or let AI do everything for you.

Because best practices are still emerging, your outcomes can vary drastically based on your individual approach.

## My approach to AI-driven coding

Personally, AI coding has significantly boosted my productivity and I'm regularly using it to ship large features in production.

While I primarily consider myself a designer and product manager, I began coding professionally in 2023 (when I started [Versive](https://www.getversive.com/)) initially without AI, then with ChatGPT, Copilot, and now Cursor. Currently, my workflow includes:

- Design: Figma
- Planning: ChatGPT (o3 and 4o)
- Coding: Cursor (with Claude 4 Sonnet)
- Projects: From large monorepos to small Next apps

Because AI tools exploded while I was learning to code, I embraced them early and learned some useful tips along the way:

## 1. When in doubt, start in Figma

If you're making a significant UI change or designing a new screen, start in Figma. You probably have much better taste than AI (at least for now) and creating a visual reference of what you're working towards will save a ton of back-and-forth later. You can even give Cursor your designs by connecting [Figma to Cursor through MCP](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Dev-Mode-MCP-Server).

It may also help to write a rough product requirements document (with the help of ChatGPT) to help clarify your goals.

## 2. Break big features into smaller pieces

Think of your AI assistant as an efficient mid-level engineer; capable, but needing clear direction and manageable scope. Instead of overwhelming it with extensive, ambiguous requests, break tasks into smaller, actionable parts.

Rather than saying:

> Build a feature to connect Figma files, select frames, define test objectives, analyze with OpenAI, and display results.

Send something like:

> We're building a new feature for Figma-based usability testing. First, help me build a flow where a user can paste a Figma prototype link and we fetch and display the frames.

After each step, review the code, refine, and then proceed incrementally.

## 3. Regularly review and accept changes

Avoid letting AI code unsupervised for too long. After each significant set of changes, make sure you:

1. Test the feature in the browser to ensure it works as expected
2. Read and review the code diffs
3. Accept or reject changes, and make manual adjustments

This helps you understand your codebase, keeps future diffs smaller, and ensures the AI assistant works from a clean foundation.

## 4. Re-run bad prompts instead of chatting with them

Sometimes the AI assistant may make unexpected changes, overcomplicate features, or implement solutions that don't work. In many of these cases, it's better to re-write the original prompt rather than continuing to chat with the AI.

Bad prompts yield messy code that becomes harder to fix as you layer on additional asks. Instead, go back to the prompt that went wrong and edit it to tell the AI what to avoid.

## 5. Be as specific as you can

Effective AI coding isn’t just passive "vibe coding." Whenever I'm unsatisfied with an AI solution, it's usually because I gave vague instructions.

Try to precisely describe the feature, including the user flow, data structures, and any opinions you have on how the code should be organized.

Instead of:

> Have AI analyze and summarize the transcript.

Use detailed guidance:

> Generate an AI summary using OpenAI model 4.1 mini. Pass the transcript and a user prompt, returning a structured response with summary paragraph and sentiment analysis including a title and description. Display this above the transcript on the results page.

## 6. Embrace the joy of polishing your UI&#x20;

If there's one skill designers should learn, it's CSS. I recommend using [Tailwind](https://tailwindcss.com/), which AI understands well.

Like many engineers, AI generally struggles with visually nuanced details. Even if you do everything right, you'll still need to make manual adjustments to the UI it generates. I encourage you to embrace this process of manual refinement. This level of craft is one of the unique skills Designers bring to the table and can transform a functional solution into a beautiful one.

## Above all else, practice makes perfect

Coding with AI is a new skill for everyone. In my opinion, Designers, equipped with their unique insights and creativity, are especially well-positioned to excel as builders in this evolving landscape.

Think back to when you were just learning design. It probably took a long time to arrive at a design solution that met your standards. As you experimented, you learned which patterns to use and which ones to avoid. Now, you're probably a lot more efficient.

As with design, you'll build intuition and efficiency through consistent practice. Over time, you'll intuitively grasp when to rely on AI, how to write effective prompts, and what pitfalls to look out for.
