import type { MDXComponents } from "mdx/types";

// Pictures run wider than the text: up to 52rem, centered on the column,
// and just the column's width on a phone.
const WIDE =
  "relative left-1/2 block w-[min(52rem,calc(100vw-3rem))] max-w-none -translate-x-1/2";

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-normal text-[var(--article-muted)]! leading-normal! -mt-5! mb-8!">
      {children}
    </p>
  );
}

export const mdxComponents: MDXComponents = {
  Callout,
  a: ({ href, children, ...props }) => {
    const isExternal = href?.startsWith("http");
    return (
      <a
        href={href}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...props}
      >
        {children}
      </a>
    );
  },
  img: ({ src, alt, ...props }) => {
    if (src?.match(/\.(mp4|webm|mov|avi|mkv)$/i)) {
      const ext = src.match(/\.(mp4|webm|mov|avi|mkv)$/i)?.[1] || "mp4";
      return (
        <video
          controls
          className={WIDE}
          preload="metadata"
          {...(props as React.VideoHTMLAttributes<HTMLVideoElement>)}
        >
          <source src={src} type={`video/${ext}`} />
          Your browser does not support the video tag.
        </video>
      );
    }
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt || ""} {...props} className={WIDE} />;
  },
};
