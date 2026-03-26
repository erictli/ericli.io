import type { MDXComponents } from "mdx/types";

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm sm:text-[15px] font-normal opacity-50 leading-normal! -mt-5! mb-8!">
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
          className="rounded-lg"
          preload="metadata"
          {...(props as React.VideoHTMLAttributes<HTMLVideoElement>)}
        >
          <source src={src} type={`video/${ext}`} />
          Your browser does not support the video tag.
        </video>
      );
    }
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt || ""} {...props} />;
  },
};
