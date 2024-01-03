import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

export default function Menu({
  gameMode,
  setGameMode,
}: {
  gameMode: boolean;
  setGameMode: (gameMode: boolean) => void;
}) {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="fixed top-6 right-6 p-2 text-xs opacity-0 animate-fadeInMenu z-10 group">
          <MenuIcon className="h-5 w-5 stroke-[1.5] transition-opacity duration-300 group-hover:opacity-80" />
        </div>
      </SheetTrigger>
      <SheetContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        onCloseAutoFocus={(e) => {
          e.preventDefault();
        }}
        className="text-black text-2xl font-display flex flex-col"
      >
        <div className="flex-1 flex flex-col gap-1 justify-center">
          <button
            className={`text-left px-2 py-1 hover:opacity-100 transition-opacity duration-300 cursor-pointer focus:outline-none focus:bg-black/[7%] rounded-md ${
              gameMode ? "opacity-100" : "opacity-60"
            }`}
            onClick={() => setGameMode(true)}
          >
            Game mode
          </button>
          <button
            className={`text-left px-2 py-1 hover:opacity-100 transition-opacity duration-300 cursor-pointer focus:outline-none focus:bg-black/[7%] rounded-md ${
              !gameMode ? "opacity-100" : "opacity-60"
            }`}
            onClick={() => setGameMode(false)}
          >
            Text mode
          </button>
          <hr className="border-black/10 border-dashed my-3 mx-2" />
          <a
            href="https://getversive.com"
            target="_blank"
            className="px-2 py-1 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer focus:outline-none focus:bg-black/[7%] rounded-md"
          >
            Versive
          </a>
          <a
            href="https://www.linkedin.com/in/erictli/"
            target="_blank"
            className="px-2 py-1 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer focus:outline-none focus:bg-black/[7%] rounded-md"
          >
            LinkedIn
          </a>
          <a
            href="https://read.cv/meow"
            target="_blank"
            className="px-2 py-1 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer focus:outline-none focus:bg-black/[7%] rounded-md"
          >
            Read.cv
          </a>
          <a
            href="mailto:hi@ericli.io"
            target="_blank"
            className="px-2 py-1 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer focus:outline-none focus:bg-black/[7%] rounded-md"
          >
            hi@ericli.io
          </a>
        </div>
        <div className="font-sans text-xs font-medium opacity-40">
          Last updated Jan 1, 2024
        </div>
      </SheetContent>
    </Sheet>
  );
}
