"use client";

import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";
import BottomNav from "./BottomNav";
import { IconLoader } from "@tabler/icons-react";

type Article = {
  slug: string;
  title: string;
  readTime: string;
};

interface HomeProps {
  articles: Article[];
}

export default function Home({ articles }: HomeProps) {
  const {
    getTextColorClass,
    getLinkColorClass,
    getOpacityClass,
    getHrColorClass,
    isHydrated,
  } = useTheme();

  if (!isHydrated) {
    return <div className="flex justify-center items-center h-screen"></div>;
  }

  return (
    <main
      className={`min-h-screen w-full font-abc-diatype transition-colors duration-200 ${getTextColorClass()}`}
    >
      <div className="flex text-[15px] p-6 pb-24 sm:p-10 justify-between gap-6 sm:gap-10 flex-col sm:flex-row">
        <div className="sm:max-w-[21rem] space-y-6 flex-1">
          <div className="space-y-3 animate-fadeInHome1 opacity-0">
            <h1 className="font-semibold">
              Hi, I&apos;m Eric, the co-founder of{" "}
              <Link
                href="https://getversive.com"
                target="_blank"
                className={`hover:opacity-60 transition-opacity border-b border-dashed pb-0.5 ${getLinkColorClass()}`}
              >
                Versive
              </Link>
              .
            </h1>

            <div className={`space-y-3 ${getOpacityClass()}`}>
              <p>
                I&apos;m a designer and developer who&apos;s worked at startups
                and public companies, including Uber,{" "}
                <Link
                  href="https://www.prnewswire.com/news-releases/alliance-data-completes-acquisition-of-bread-301186414.html"
                  target="_blank"
                  className={`hover:opacity-60 transition-opacity border-b border-dashed pb-0.5 ${getLinkColorClass()}`}
                >
                  Bread
                </Link>
                , and{" "}
                <Link
                  href="https://techcrunch.com/2021/01/vareto-raises-24m-from-gv-menlo-and-all-star-angels-to-reinvent-financial-planning-for-enterprises/"
                  target="_blank"
                  className={`hover:opacity-60 transition-opacity border-b border-dashed pb-0.5 ${getLinkColorClass()}`}
                >
                  Vareto
                </Link>
                .
              </p>

              <p>
                In a past life, I studied economics at the University of Chicago
                and was an{" "}
                <Link
                  href="https://www.microsoft.com/en-us/microsoft-365/excel"
                  target="_blank"
                  className={`hover:opacity-60 transition-opacity border-b border-dashed pb-0.5 ${getLinkColorClass()}`}
                >
                  investment banker
                </Link>
                .
              </p>

              <p>
                I&apos;m originally from the Chicago suburbs and currently live
                in Brooklyn, NY.
              </p>
            </div>
          </div>
        </div>
        <hr
          className={`sm:hidden border-dashed ${getOpacityClass()} ${getHrColorClass()}`}
        />
        <div className="sm:max-w-[21rem] space-y-6 flex-1 animate-fadeInHome2 opacity-0">
          <div className="space-y-3">
            <h2 className={getOpacityClass()}>Projects</h2>

            <div className="space-y-3">
              <div className="space-y-0.5">
                <Link
                  href="https://getversive.com"
                  target="_blank"
                  className={`font-semibold !leading-snug hover:opacity-60 transition-opacity block ${getLinkColorClass()}`}
                >
                  Versive
                </Link>
                <p className={`text-sm ${getOpacityClass()}`}>
                  An AI-first user research platform
                </p>
              </div>

              <div className="space-y-0.5">
                <Link
                  href="https://mirio-zeta.vercel.app/"
                  target="_blank"
                  className={`font-semibold !leading-snug hover:opacity-60 transition-opacity block ${getLinkColorClass()}`}
                >
                  Mirio
                </Link>
                <p className={`text-sm ${getOpacityClass()}`}>
                  Build interactive demos for your API products
                </p>
              </div>
              <div className="space-y-0.5">
                <Link
                  href="/v1"
                  className={`font-semibold !leading-snug hover:opacity-60 transition-opacity block ${getLinkColorClass()}`}
                >
                  ericli.io
                </Link>
                <p className={`text-sm ${getOpacityClass()}`}>
                  The previous version of this website
                </p>
              </div>
            </div>
          </div>
          <hr
            className={`border-dashed ${getOpacityClass()} ${getHrColorClass()}`}
          />
          <div className="space-y-3">
            <h2 className={getOpacityClass()}>Writing</h2>

            <div className="space-y-3">
              {articles.map((article) => (
                <div key={article.slug} className="space-y-0.5">
                  <Link
                    href={`/writing/${article.slug}`}
                    className={`font-semibold !leading-snug hover:opacity-60 transition-opacity block ${getLinkColorClass()}`}
                  >
                    {article.title}
                  </Link>
                  <p className={`text-sm ${getOpacityClass()}`}>
                    {article.readTime}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </main>
  );
}
