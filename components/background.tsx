import Image from "next/image";
import { HomeIcon } from "lucide-react";

export default function Background({
  animationTriggers,
}: {
  animationTriggers: boolean[];
}) {
  return (
    <div className="absolute top-[calc(50dvh-280px-40px)] left-0 h-[560px] flex items-center pointer-events-none select-none opacity-0 animate-fadeInBackground">
      <div
        className={`relative transition-opacity duration-1000 ${
          animationTriggers[1] && !animationTriggers[2]
            ? "opacity-0"
            : "opacity-100"
        }`}
      >
        <Image
          src="/images/backgrounds/background-street-1.png"
          alt="Background"
          priority
          height={560}
          width={1434}
          quality={100}
          className=""
        />
        <div
          className={`absolute left-0 top-0 bottom-0 w-80 bg-gradient-to-r from-black to-black/0`}
        ></div>
        <div
          className={`absolute right-0 top-0 bottom-0 w-96 bg-gradient-to-l from-black to-black/0`}
        ></div>
        <div
          className={`absolute left-0 right-0 top-0 h-44 bg-gradient-to-b from-black from-5% to-black/0`}
        ></div>
        <div
          className={`absolute left-0 right-0 bottom-0 h-9 bg-gradient-to-t from-black to-black/0`}
        ></div>
      </div>
      <div className="flex-none h-[560px] w-[560px] mr-60 flex items-center justify-center">
        <Image
          src="/images/versive.svg"
          priority
          height={440}
          width={440}
          alt="Versive Logo"
          className={`animate-spin !duration-8000 mb-4 transition-opacity ${
            animationTriggers[1] ? "opacity-[8%]" : "opacity-0"
          }`}
        />
      </div>
      <div
        className={`flex-none h-[560px] w-[880px] bg-white/[8%] rounded-md mr-20 opacity-0 ${
          animationTriggers[2] ? "animate-fadeInFigma" : ""
        }`}
      >
        <div className="w-full border-b border-white/5 flex items-center">
          <div className="flex items-center gap-2 p-3 h-8 border-r border-white/5 ">
            <div className="h-[10px] w-[10px] rounded-full border border-white/[8%]"></div>
            <div className="h-[10px] w-[10px] rounded-full border border-white/[8%]"></div>
            <div className="h-[10px] w-[10px] rounded-full border border-white/[8%]"></div>
          </div>
          <div className="h-8 flex items-center justify-center p-3 border-r border-white/5">
            <HomeIcon className="h-3 w-3 fill-white opacity-20" />
          </div>
          <div className="h-8 flex gap-[6px] items-center justify-center p-3 text-[9px] border-r border-white/5">
            <div className="h-3 w-3 bg-sky-500/30 rounded-sm"></div>
            ericli.io
          </div>
        </div>
      </div>
      <div
        className={`relative transition-opacity duration-1000 ${
          animationTriggers[3] ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src="/images/backgrounds/background-office.png"
          alt="Background"
          height={560}
          width={896}
          quality={100}
          className="h-[560px]"
        />
        <div
          className={`absolute left-0 top-0 bottom-0 w-96 bg-gradient-to-r from-black to-black/0`}
        ></div>
        <div
          className={`absolute right-0 top-0 bottom-0 w-96 bg-gradient-to-l from-black to-black/0`}
        ></div>
        <div
          className={`absolute left-0 right-0 top-0 h-48 bg-gradient-to-b from-black from-30% to-black/0`}
        ></div>
        <div
          className={`absolute left-0 right-0 bottom-0 h-12 bg-gradient-to-t from-black from-20% to-black/0`}
        ></div>
      </div>
      <div className="relative mr-10">
        <Image
          src="/images/backgrounds/background-campus.png"
          alt="Background"
          height={560}
          width={1170}
          quality={100}
        />
        <div
          className={`absolute left-0 top-0 bottom-0 w-96 bg-gradient-to-r from-black to-black/0`}
        ></div>
        <div
          className={`absolute right-0 top-0 bottom-0 w-96 bg-gradient-to-l from-black to-black/0`}
        ></div>
        <div
          className={`absolute left-0 right-0 top-0 h-44 bg-gradient-to-b from-black to-black/0`}
        ></div>
        <div
          className={`absolute left-0 right-0 bottom-0 h-9 bg-gradient-to-t from-black to-black/0`}
        ></div>
      </div>
      <div className="relative">
        <Image
          src="/images/backgrounds/background-street-2.png"
          alt="Background"
          height={560}
          width={1092}
          quality={100}
        />
        <div
          className={`absolute left-0 top-0 bottom-0 w-96 bg-gradient-to-r from-black to-black/0`}
        ></div>
        <div
          className={`absolute right-0 top-0 bottom-0 w-96 bg-gradient-to-l from-black to-black/0`}
        ></div>
        <div
          className={`absolute left-0 right-0 top-0 h-44 bg-gradient-to-b from-black to-black/0`}
        ></div>
        <div
          className={`absolute left-0 right-0 bottom-0 h-9 bg-gradient-to-t from-black to-black/0`}
        ></div>
      </div>
      <div className="relative">
        <Image
          src="/images/backgrounds/background-street-3.png"
          alt="Background"
          height={560}
          width={1170}
          quality={100}
        />
        <div
          className={`absolute left-0 top-0 bottom-0 w-96 bg-gradient-to-r from-black to-black/0`}
        ></div>
        <div
          className={`absolute right-0 top-0 bottom-0 w-96 bg-gradient-to-l from-black to-black/0`}
        ></div>
        <div
          className={`absolute left-0 right-0 top-0 h-44 bg-gradient-to-b from-black to-black/0`}
        ></div>
        <div
          className={`absolute left-0 right-0 bottom-0 h-9 bg-gradient-to-t from-black to-black/0`}
        ></div>
      </div>
    </div>
  );
}
