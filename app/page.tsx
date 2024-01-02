// Add text mode
// Favicon
// Vertical alignment for big monitors
// Reduce border to 12px
// Mobile controls
// ---
// Special mouse cursor
// Add progress bar
// Improve sprites
// Down arrow to trigger actions (crouch, animate teleportation, open new tab)

"use client";

import React, { useState, useEffect, useRef } from "react";
import Menu from "@/components/menu";
import Background from "@/components/background";
import Messages from "@/components/messages";
import {
  spritesheet,
  spriteWidth,
  spriteHeight,
  standingFrameChange,
  walkingFrameRate,
  moveSpeed,
  jumpVelocity,
  gravity,
  textPositionTriggers,
  backgroundWidth,
} from "@/lib/constants";

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
  const [showInstructions, setShowInstructions] = useState<boolean>(true);

  const moveDirection = useRef(0); // 1 for right, -1 for left
  const containerRef = useRef<HTMLDivElement>(null); // Ref for the scrolling container

  // Handle key down and key up with proper event type
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setMoving(true);
        moveDirection.current = -1;
        setShowInstructions(false);
      } else if (e.key === "ArrowRight") {
        setMoving(true);
        moveDirection.current = 1;
        setShowInstructions(false);
      }
      if ((e.key === "ArrowUp" || e.key === " ") && !isJumping) {
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
          return Math.max(
            Math.min(newPosition, backgroundWidth - spriteWidth),
            0,
          );
        });
      }, 1000 / 60); // 60 times per second

      frameInterval = setInterval(() => {
        setFrame((prevFrame) => {
          // Cycle through walking frames (4 walking frames starting at frame index 2)
          const nextFrame = prevFrame < 2 || prevFrame >= 7 ? 2 : prevFrame + 1;
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
        const containerCenter = (container.offsetWidth - spriteWidth) / 2;
        // Check if character position is greater than the center of the container
        if (position > containerCenter) {
          // Scroll the container so that the character is in the middle
          container.scrollLeft = position - containerCenter;
        }
      }
    };

    handleScroll();
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
    -(moving ? frame % 6 : standingFrameIndex) * spriteWidth;
  const backgroundPositionY = -(moving ? 1 : 0) * spriteHeight;

  return (
    <main className="flex items-center justify-center bg-white p-4">
      <div
        ref={containerRef}
        className={`relative h-[calc(100dvh-32px)] w-[calc(100dvw-32px)] overflow-hidden transition-colors duration-5000 ${
          animationTriggers[1] && !animationTriggers[2]
            ? "bg-teal-950"
            : "bg-black"
        }`}
      >
        <div className="relative" style={{ width: backgroundWidth + "px" }}>
          <Background animationTriggers={animationTriggers} />
          <Messages animationTriggers={animationTriggers} />
          <div
            className="absolute mt-[calc(85dvh-192px)] "
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
        </div>
        <Menu gameMode={true} />
        <div
          className={`fixed bottom-8 text-xs left-1/2 -translate-x-1/2 duration-500 opacity-0 animate-fadeInControls font-medium ${
            showInstructions ? "text-white/100 " : "text-white/0"
          }`}
        >
          Use the arrow keys to move
        </div>
      </div>
      <div
        className={`fixed top-4 left-4 right-4 bottom-4 transition-colors duration-5000 ${
          animationTriggers[6]
            ? "bg-indigo-800/20"
            : animationTriggers[4]
              ? "bg-fuchsia-900/5"
              : ""
        }`}
      ></div>
    </main>
  );
}
