// Apply the direction to standing too
// Vertical alignment for big monitors
// New sprites
// Animation when sprite intersects text
// Down arrow links (crouch, animate teleportation, open new tab)
// Special mouse cursor
// Change colors in different sections (requires moving gradients to the page)

"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, HomeIcon } from "lucide-react";

const spritesheet = "/images/spritesheet-eric.svg";
const spriteWidth = 64 * 2;
const spriteHeight = 96 * 2;
const standingFrameChange = [1600, 200]; // Duration in milliseconds for each standing frame
const walkingFrameRate = 150; // Time in milliseconds for each walking frame
const moveSpeed = 5; // Pixels to move per frame
const jumpVelocity = -12; // Initial velocity for the jump, negative for upward
const gravity = 0.6; // Gravity applied to the character
const textPositions = [
  0,
  1434 + 560 / 2 - 160 - 320, // Need to subtract the width of the previous text
  1434 + 560 / 2 + 860 - 320 * 2,
  1434 + 560 / 2 + 860 * 2 - 320 * 2,
  1434 + 560 / 2 + 860 * 3 - 320 * 2,
  1434 + 560 / 2 + 860 * 4 - 320 * 2,
  1434 + 560 / 2 + 860 * 5 - 320 * 2,
];
const textPositionTriggers = [
  0,
  1434 + 560 / 2 - 160, // Need to subtract the width of the previous text
  1434 + 560 / 2 + 860,
  1434 + 560 / 2 + 860 * 2,
  1434 + 560 / 2 + 860 * 3,
  1434 + 560 / 2 + 860 * 4,
  1434 + 560 / 2 + 860 * 5,
];
const backgroundWidth = 96 * 3 + 1434 + 1334 + 1170 + 1334 + 1334 + 1200;

// Define types for your state
type SpriteState = {
  position: number;
  frame: number;
  moving: boolean;
  standingFrameIndex: number;
  verticalPosition: number;
  verticalVelocity: number;
  isJumping: boolean;
};

export default function Home() {
  // Sprite state with types
  const [position, setPosition] = useState<SpriteState["position"]>(120);
  const [frame, setFrame] = useState<SpriteState["frame"]>(0);
  const [moving, setMoving] = useState<SpriteState["moving"]>(false);
  const [standingFrameIndex, setStandingFrameIndex] =
    useState<SpriteState["standingFrameIndex"]>(0);
  const [verticalPosition, setVerticalPosition] =
    useState<SpriteState["verticalPosition"]>(0);
  const [verticalVelocity, setVerticalVelocity] =
    useState<SpriteState["verticalVelocity"]>(0);
  const [isJumping, setIsJumping] = useState<SpriteState["isJumping"]>(false);
  const [animationTriggers, setAnimationTriggers] = useState<boolean[]>(
    new Array(textPositionTriggers.length).fill(false),
  );

  const moveDirection = useRef(0); // 1 for right, -1 for left
  const containerRef = useRef<HTMLDivElement>(null); // Ref for the scrolling container

  // Handle key down and key up with proper event type
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setMoving(true);
        moveDirection.current = -1;
      } else if (e.key === "ArrowRight") {
        setMoving(true);
        moveDirection.current = 1;
      }
      if (e.key === "ArrowUp" && !isJumping) {
        setIsJumping(true);
        setVerticalVelocity(jumpVelocity);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (
        (e.key === "ArrowLeft" && moveDirection.current === -1) ||
        (e.key === "ArrowRight" && moveDirection.current === 1)
      ) {
        setMoving(false);
        moveDirection.current = 0;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [isJumping]);

  // Standing animation frames
  useEffect(() => {
    if (!moving) {
      const timeoutId = setTimeout(() => {
        // Toggle between the first two frames for standing
        setStandingFrameIndex((prevIndex) => (prevIndex + 1) % 2);
      }, standingFrameChange[standingFrameIndex]);

      return () => clearTimeout(timeoutId);
    }
  }, [moving, standingFrameIndex]);

  // Walking animation frames
  // Handle movement and animation
  useEffect(() => {
    let moveInterval: NodeJS.Timeout | null = null;
    let frameInterval: NodeJS.Timeout | null = null;

    if (moving) {
      moveInterval = setInterval(() => {
        setPosition((prev) => {
          // Calculate the new position considering the move direction
          const newPosition = prev + moveSpeed * moveDirection.current;
          // Prevent moving past the start of the page on the left
          return Math.max(Math.min(newPosition, backgroundWidth), 0);
        });
      }, 1000 / 60); // 60 times per second

      frameInterval = setInterval(() => {
        setFrame((prevFrame) => {
          // Cycle through walking frames (4 walking frames starting at frame index 2)
          const nextFrame = prevFrame < 2 || prevFrame >= 5 ? 2 : prevFrame + 1;
          return nextFrame;
        });
      }, walkingFrameRate);
    }

    return () => {
      if (moveInterval) clearInterval(moveInterval);
      if (frameInterval) clearInterval(frameInterval);
    };
  }, [moving]);

  // Jumping physics effect
  useEffect(() => {
    let physicsInterval: NodeJS.Timeout | null = null;

    if (isJumping) {
      physicsInterval = setInterval(() => {
        setVerticalPosition((prev) => {
          const nextPosition = prev + verticalVelocity;
          return nextPosition > 0 ? 0 : nextPosition; // Prevents going below the ground
        });
        setVerticalVelocity((prev) => prev + gravity); // Apply gravity

        if (verticalPosition >= 0 && verticalVelocity > 0) {
          setIsJumping(false); // Stop jumping when character lands
        }
      }, 1000 / 60); // 60 times per second for smooth physics
    }

    return () => {
      if (physicsInterval) clearInterval(physicsInterval);
    };
  }, [isJumping, verticalPosition, verticalVelocity]);

  // Effect for scrolling the page to follow the character
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const containerCenter = container.offsetWidth / 2;
        // Check if character position is greater than the center of the container
        if (position > containerCenter) {
          // Scroll the container so that the character is in the middle
          container.scrollLeft = position - containerCenter;
        }
      }
    };

    // Call the scroll handler whenever the character's position changes
    handleScroll();

    // You can also call this function on window resize if needed
    // window.addEventListener('resize', handleScroll);
    // return () => window.removeEventListener('resize', handleScroll);
  }, [position]);

  // Effect to trigger animations based on the sprite's position
  useEffect(() => {
    textPositionTriggers.forEach((xPosition, index) => {
      if (position >= xPosition && !animationTriggers[index]) {
        setAnimationTriggers((prevTriggers) => {
          const newTriggers = [...prevTriggers];
          newTriggers[index] = true;
          return newTriggers;
        });
      }
    });
  }, [position, animationTriggers]);

  // Calculate the background position based on the frame
  const backgroundPositionX =
    -(moving ? frame % 4 : standingFrameIndex) * spriteWidth;
  const backgroundPositionY = -(moving ? 1 : 0) * spriteHeight;

  // Render the sprite
  return (
    <main className="flex items-center justify-center bg-white p-4">
      <div
        ref={containerRef}
        className={`relative h-[calc(100dvh-32px)] w-[calc(100dvw-32px)] overflow-hidden transition-colors duration-5000 ${
          animationTriggers[1] && !animationTriggers[2]
            ? "bg-teal-900"
            : "bg-black"
        }`}
      >
        <div className="relative" style={{ width: backgroundWidth + "px" }}>
          <div className="absolute top-[calc(85dvh-560px-12px)] left-0 flex items-center pointer-events-none select-none opacity-0 animate-fadeInBackground">
            <Image
              src="/images/background-1.png"
              alt="Background"
              priority
              height={560}
              width={1434}
              quality={100}
              className=""
            />
            <div className="flex-none h-[560px] w-[560px] mr-[240px] flex items-center justify-center">
              <Image
                src="/images/versive.svg"
                priority
                height={440}
                width={440}
                alt="Versive Logo"
                className={`animate-spin !duration-8000 mb-4 transition-opacity ${
                  animationTriggers[1] ? "opacity-[8%]" : "opacity-5"
                }`}
              />
            </div>
            <div className="flex-none h-[560px] w-[880px] bg-white/[8%] rounded-md mr-10">
              <div className="w-full border-b border-white/5 flex items-center">
                <div className="flex items-center gap-2 p-3 h-8 border-r border-white/5 ">
                  <div className="h-[10px] w-[10px] rounded-full border border-white/[8%]"></div>
                  <div className="h-[10px] w-[10px] rounded-full border border-white/[8%]"></div>
                  <div className="h-[10px] w-[10px] rounded-full border border-white/[8%]"></div>
                </div>
                <div className="h-8 flex items-center justify-center p-3 border-r border-white/5">
                  <HomeIcon size={12} className=" fill-white opacity-20" />
                </div>
                <div className="h-8 flex gap-[6px] items-center justify-center p-3 text-[9px] border-r border-white/5">
                  <div className="h-3 w-3 bg-sky-500/30 rounded-sm"></div>
                  ericli.io
                </div>
              </div>
            </div>
            <Image
              src="/images/background-office.png"
              alt="Background"
              priority
              height={560}
              width={1170}
              quality={100}
              className=""
            />
            <Image
              src="/images/background-campus.png"
              alt="Background"
              priority
              height={560}
              width={1170}
              quality={100}
            />
            <Image
              src="/images/background-2.png"
              alt="Background"
              priority
              height={560}
              width={1334}
              quality={100}
            />
            <Image
              src="/images/background-3.png"
              alt="Background"
              priority
              height={560}
              width={1170}
              quality={100}
            />
          </div>

          <div className="relative top-[calc(100dvh/2-80px)] flex items-center text-[25px] leading-snug">
            <div
              className={`relative font-display w-[320px] opacity-0 left-[calc(100dvw/2-16px-160px)] text-center ${
                animationTriggers[0] ? "animate-fadeInText" : ""
              }`}
            >
              Hi, I&apos;m Eric.
            </div>

            <div
              className={`relative font-display w-[320px] opacity-0 text-center ${
                animationTriggers[1] ? "animate-fadeInText" : ""
              }`}
              style={{ left: textPositions[1] + "px" }}
            >
              I&apos;m the co-founder of Versive, an AI-first survey platform.
            </div>
            <div
              className={`relative font-display w-[320px] opacity-0 text-center border border-white/10 ${
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
              className={`relative font-display w-[320px] opacity-0 ${
                animationTriggers[3] ? "animate-fadeInText" : ""
              }`}
              style={{ left: textPositions[3] + "px" }}
            >
              I&apos;ve worked at tiny startups and public companies. Most
              recently I was at Vareto, Uber, and Bread.
            </div>
            <div
              className={`relative font-display w-[320px] opacity-0 ${
                animationTriggers[4] ? "animate-fadeInText" : ""
              }`}
              style={{ left: textPositions[4] + "px" }}
            >
              In a past life, I worked in finance and studied economics at the
              University of Chicago.
            </div>
            <div
              className={`relative font-display w-[320px] opacity-0 ${
                animationTriggers[5] ? "animate-fadeInText" : ""
              }`}
              style={{ left: textPositions[5] + "px" }}
            >
              I&apos;m originally from the Chicago suburbs and currently live in
              Brooklyn, NY.
            </div>
            <div
              className={`relative font-display w-[320px] opacity-0 ${
                animationTriggers[6] ? "animate-fadeInText" : ""
              }`}
              style={{ left: textPositions[6] + "px" }}
            >
              Thanks for walking with me.
            </div>
          </div>
          <div
            id="sprite"
            className={`mt-[calc(85dvh-192px)] animate-fadeInSprite opacity-0 ${
              animationTriggers[2] && !animationTriggers[3]
                ? "border border-white/10"
                : ""
            }}`}
            style={{
              position: "absolute",
              left: `${position}px`,
              top: `${verticalPosition}px`,
              width: `${spriteWidth}px`,
              height: `${spriteHeight}px`,
              background: `url(${spritesheet}) ${backgroundPositionX}px ${backgroundPositionY}px`,
              transform: moveDirection.current === -1 ? "scaleX(-1)" : "none", // Flips the sprite when moving left
            }}
          >
            {/* Move sprite border to a separate component with fixed height and width
            Add label for Layer 1 */}
          </div>
        </div>
        <div className="fixed top-9 right-9 text-xs opacity-0 animate-fadeInMenu">
          <Menu size={20} className="stroke-[1.5]" />
          {/* 
            Last updated
            Text mode
            Linkedin
            Readcv
            Email
            Versive

           */}
        </div>
        <div className="fixed bottom-9 text-xs left-1/2 -translate-x-1/2 text-neutral-500 opacity-0 animate-fadeInControls">
          User the arrow keys to move
        </div>
      </div>
    </main>
  );
}
