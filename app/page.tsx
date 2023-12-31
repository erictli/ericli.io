// Add better way to manage sprite states in the spritesheet (e.g. rows and columns)
// Apply the direction to standing too
// Jumping should jump up.

"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const spritesheet = "/spritesheet-eric.svg";
const spriteWidth = 64 * 2;
const spriteHeight = 96 * 2;
const standingFrameChange = [1600, 200]; // Duration in milliseconds for each standing frame
const walkingFrameRate = 150; // Time in milliseconds for each walking frame
const moveSpeed = 5; // Pixels to move per frame
const jumpVelocity = -12; // Initial velocity for the jump, negative for upward
const gravity = 0.6; // Gravity applied to the character

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
  const [position, setPosition] = useState<SpriteState["position"]>(100);
  const [frame, setFrame] = useState<SpriteState["frame"]>(0);
  const [moving, setMoving] = useState<SpriteState["moving"]>(false);
  const [standingFrameIndex, setStandingFrameIndex] =
    useState<SpriteState["standingFrameIndex"]>(0);
  const [verticalPosition, setVerticalPosition] =
    useState<SpriteState["verticalPosition"]>(0);
  const [verticalVelocity, setVerticalVelocity] =
    useState<SpriteState["verticalVelocity"]>(0);
  const [isJumping, setIsJumping] = useState<SpriteState["isJumping"]>(false);

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
          return Math.max(newPosition, 0);
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

  // Calculate the background position based on the frame
  const backgroundPositionX =
    -(moving ? frame % 4 : standingFrameIndex) * spriteWidth;
  const backgroundPositionY = -(moving ? 1 : 0) * spriteHeight;

  // Render the sprite
  return (
    <main ref={containerRef} className="relative h-[100dvh] overflow-hidden">
      <div className="relative w-[5648px]">
        <Image
          src="/background.png"
          alt="Background"
          height={728}
          width={5648}
          className="absolute top-[-80px] left-0"
        />
        <div
          id="sprite"
          className="mt-[480px]"
          style={{
            position: "absolute",
            left: `${position}px`,
            // top: "100px", // Y-position on screen, adjust as needed
            top: `${verticalPosition}px`, // Changed to bottom to make it jump
            width: `${spriteWidth}px`, // Width of the sprite
            height: `${spriteHeight}px`, // Height of the sprite
            background: `url(${spritesheet}) ${backgroundPositionX}px ${backgroundPositionY}px`,
            transform: moveDirection.current === -1 ? "scaleX(-1)" : "none", // Flips the sprite when moving left
          }}
        ></div>
      </div>
    </main>
  );
}
