import { textPositions } from "@/lib/constants";

export default function Messages({
  animationTriggers,
}: {
  animationTriggers: boolean[];
}) {
  return (
    <div className="relative top-[calc(50dvh-51px-40px)] flex items-center text-[25px] leading-snug text-center">
      <div
        className={`relative font-display w-80 opacity-0 left-[calc(100dvw/2-12px-160px)] ${
          animationTriggers[0] ? "animate-fadeInText" : ""
        }`}
      >
        Hi, I&apos;m Eric.
      </div>

      <div
        className={`relative font-display w-80 opacity-0 ${
          animationTriggers[1] ? "animate-fadeInText" : ""
        }`}
        style={{ left: textPositions[1] + "px" }}
      >
        I&apos;m the co-founder of{" "}
        <a
          href="https://getversive.com"
          target="_blank"
          className="focus:outline-none hover:opacity-50 transition-opacity duration-500 focus:opacity-50"
        >
          Versive
        </a>
        , an AI-first survey platform.
      </div>
      <div
        className={`relative font-display w-80 opacity-0 border border-white/10 ${
          animationTriggers[2] ? "animate-fadeInText" : ""
        }`}
        style={{ left: textPositions[2] + "px" }}
      >
        I&apos;m a self-taught designer, developer, and product manager.
        <div className="absolute text-[10px] font-sans opacity-30 -top-4">
          Frame 1
        </div>
      </div>
      <div
        className={`relative font-display w-80 opacity-0 ${
          animationTriggers[3] ? "animate-fadeInText" : ""
        }`}
        style={{ left: textPositions[3] + "px" }}
      >
        I&apos;ve worked at tiny startups and public companies. Most recently I
        was at Vareto, Uber, and Bread.
      </div>
      <div
        className={`relative font-display w-80 opacity-0 ${
          animationTriggers[4] ? "animate-fadeInText" : ""
        }`}
        style={{ left: textPositions[4] + "px" }}
      >
        In a past life, I worked in finance and studied economics at the
        University of Chicago.
      </div>
      <div
        className={`relative font-display w-80 opacity-0 ${
          animationTriggers[5] ? "animate-fadeInText" : ""
        }`}
        style={{ left: textPositions[5] + "px" }}
      >
        I&apos;m originally from the Chicago suburbs and currently live in
        Brooklyn, NY.
      </div>
      <div
        className={`relative text-lg text-right font-display w-80 opacity-0 ${
          animationTriggers[6] ? "animate-fadeInText" : ""
        }`}
        style={{ left: textPositions[6] + "px" }}
      >
        Thanks for walking with me.
      </div>
    </div>
  );
}
