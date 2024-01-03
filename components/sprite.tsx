import { spritesheet, spriteWidth, spriteHeight } from "@/lib/constants";

export default function Sprite({
  position,
  verticalPosition,
  backgroundPositionX,
  backgroundPositionY,
  animationTriggers,
  moveDirection,
}: {
  position: number;
  verticalPosition: number;
  backgroundPositionX: number;
  backgroundPositionY: number;
  animationTriggers: boolean[];
  moveDirection: any;
}) {
  return (
    <div
      className="absolute mt-[calc(50dvh-280px-40px+560px-192px+12px)] "
      style={{
        left: `${position}px`,
        top: `${verticalPosition}px`,
        width: `${spriteWidth}px`,
        height: `${spriteHeight}px`,
      }}
    >
      <div
        id="sprite"
        className={`animate-fadeInSprite opacity-0`}
        style={{
          width: `${spriteWidth}px`,
          height: `${spriteHeight}px`,
          background: `url(${spritesheet}) ${backgroundPositionX}px ${backgroundPositionY}px`,
          transform: moveDirection.current === -1 ? "scaleX(-1)" : "none", // Flips the sprite based on the last move direction
        }}
      ></div>
      <div
        className={`absolute top-3 left-4 right-4 bottom-3 border border-white/10 transition-opacity duration-1000 ${
          animationTriggers[2] && !animationTriggers[3]
            ? "opacity-100"
            : "opacity-0"
        }`}
      ></div>
      <div
        className={`absolute text-[10px] font-sans left-4 -top-1 transition-opacity duration-1000 ${
          animationTriggers[2] && !animationTriggers[3]
            ? "opacity-30"
            : "opacity-0"
        }`}
      >
        Frame 2
      </div>
    </div>
  );
}
