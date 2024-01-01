// Add better way to manage sprite states in the spritesheet (e.g. rows and columns)
// Apply the direction to standing too
// Vertical alignment for big monitors
// When reach the end of the page no longer aligned with page center
// New sprites
// Animation when sprite intersects text
// Down arrow links (crouch, animate teleportation, open new tab)
// Special mouse cursor
// Character animates in by walking in from the left

"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const spritesheet = "/images/spritesheet-eric.svg";
const spriteWidth = 64 * 2;
const spriteHeight = 96 * 2;
const standingFrameChange = [1600, 200]; // Duration in milliseconds for each standing frame
const walkingFrameRate = 150; // Time in milliseconds for each walking frame
const moveSpeed = 5; // Pixels to move per frame
const jumpVelocity = -12; // Initial velocity for the jump, negative for upward
const gravity = 0.6; // Gravity applied to the character
const textBlocks = [
  "Hi, I'm Eric.",
  "I’m the co-founder of Versive, an AI-first survey platform.",
  "I’m a self-taught designer, developer, and product manager.",
  "I've worked at tiny startups and public companies. Most recently I was at Vareto, Uber, and Bread.",
  "I’m originally from the Chicago suburbs and currently live in Brooklyn, NY.",
  "Thanks for walking with me.",
];
const secondBlockPosition =
  typeof window !== "undefined" ? window.innerWidth / 2 + 55 + 540 - 120 : 0; // Position of the second text block 540px from the first block with a 120px buffer
const textPositions = [
  0,
  secondBlockPosition,
  secondBlockPosition + 860,
  secondBlockPosition + 860 * 2,
  secondBlockPosition + 860 * 3,
  secondBlockPosition + 860 * 4,
];
const backgroundWidth = 96 * 3 + 1434 + 1334 + 1170 + 1334;

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

type TextVisibilityState = {
  visibleSections: boolean[];
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
    new Array(textBlocks.length).fill(false),
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
    textPositions.forEach((xPosition, index) => {
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
        className="relative h-[calc(100dvh-32px)] w-[calc(100dvw-32px)] overflow-hidden bg-black"
      >
        <div className="relative" style={{ width: backgroundWidth + "px" }}>
          <div className="absolute top-[calc(85dvh-560px-12px)] left-0 flex items-center gap-24 pointer-events-none select-none opacity-0 animate-fadeInBackground">
            <Image
              src="/images/background-1.png"
              alt="Background"
              priority
              height={560}
              width={1434}
              quality={100}
              className=""
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
            <Image
              src="/images/background-2.png"
              alt="Background"
              priority
              height={560}
              width={1334}
              quality={100}
            />
          </div>

          <div className="relative left-[calc(100dvw/2-16px-55px)] top-[calc(100dvh/2-80px)] flex items-center gap-[540px] text-[25px] leading-snug">
            {textBlocks.map((text, index) => (
              <div
                key={index}
                className={`font-display max-w-[320px] opacity-0 ${
                  animationTriggers[index] ? "animate-fadeInText" : ""
                }`}
              >
                {text}
              </div>
            ))}
          </div>
          <div
            id="sprite"
            className="mt-[calc(85dvh-192px)] animate-fadeInSprite opacity-0"
            style={{
              position: "absolute",
              left: `${position}px`,
              top: `${verticalPosition}px`,
              width: `${spriteWidth}px`,
              height: `${spriteHeight}px`,
              background: `url(${spritesheet}) ${backgroundPositionX}px ${backgroundPositionY}px`,
              transform: moveDirection.current === -1 ? "scaleX(-1)" : "none", // Flips the sprite when moving left
            }}
          ></div>
        </div>
        <div className="absolute bottom-5 text-xs left-1/2 -translate-x-1/2 text-neutral-500 opacity-0 animate-fadeInControls">User the arrow keys to move</div>
      </div>
    </main>
  );
}
