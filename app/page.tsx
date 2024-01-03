// Special mouse cursor
// Add Vesive survey link
// Add progress bar
// Down arrow to trigger actions (crouch, animate teleportation, open links for Versive and Linkedin)

"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Menu from "@/components/menu";
import Background from "@/components/background";
import Messages from "@/components/messages";
import Sprite from "@/components/sprite";
import { ChevronLeft, ChevronUp, ChevronRight } from "lucide-react";
import {
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
  const [gameMode, setGameMode] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const moveDirection = useRef(0); // 1 for right, -1 for left
  const containerRef = useRef<HTMLDivElement>(null); // Ref for the scrolling container

  // Calculate the background position based on the frame
  const backgroundPositionX =
    -(moving ? frame % 6 : standingFrameIndex) * spriteWidth;
  const backgroundPositionY = -(moving ? 1 : 0) * spriteHeight;

  const isMobileOrTablet = () => {
    return (
      /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(
        navigator.userAgent,
      ) || /Mobile|iPhone|iPod|Android/i.test(navigator.userAgent)
    );
  };

  useEffect(() => {
    setIsMobile(isMobileOrTablet());
  }, []);

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
  }, [position, gameMode]);

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

  // direction can be -1 or 1
  const handleMoveStart = (direction: number) => {
    setMoving(true);
    moveDirection.current = direction;
  };

  const handleMoveEnd = () => {
    setMoving(false);
  };

  const handleJumpStart = () => {
    if (!isJumping) {
      setIsJumping(true);
      setVerticalVelocity(jumpVelocity);
    }
  };

  return (
    <main className="flex items-center justify-center bg-white p-3">
      <div
        ref={containerRef}
        className={`relative h-[calc(100dvh-24px)] w-[calc(100dvw-24px)] overflow-hidden transition-colors ${
          animationTriggers[1] && !animationTriggers[2] && gameMode
            ? "bg-teal-950 duration-5000"
            : "bg-black duration-1000"
        }`}
      >
        {gameMode ? (
          <div className="relative" style={{ width: backgroundWidth + "px" }}>
            <Background animationTriggers={animationTriggers} />
            <Messages animationTriggers={animationTriggers} />
            <Sprite
              position={position}
              verticalPosition={verticalPosition}
              backgroundPositionX={backgroundPositionX}
              backgroundPositionY={backgroundPositionY}
              animationTriggers={animationTriggers}
              moveDirection={moveDirection}
            />
            {isMobile ? (
              <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 duration-500 opacity-0 animate-fadeInControls">
                <button
                  className="p-2 bg-white/10 border border-white/5 rounded-lg hover:bg-white/20 transition-colors duration-300"
                  onTouchStart={() => handleMoveStart(-1)}
                  onTouchEnd={handleMoveEnd}
                  onMouseDown={() => handleMoveStart(-1)}
                  onMouseUp={handleMoveEnd}
                  onContextMenu={(e) => e.preventDefault()} // Preventing long press menu
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  className="p-2 bg-white/10 border border-white/5 rounded-lg hover:bg-white/20 transition-colors duration-300"
                  onTouchStart={handleJumpStart}
                  onTouchEnd={handleMoveEnd}
                  onMouseDown={handleJumpStart}
                  onMouseUp={handleMoveEnd}
                  onContextMenu={(e) => e.preventDefault()} // Preventing long press menu
                >
                  <ChevronUp className="h-5 w-5" />
                </button>
                <button
                  className="p-2 bg-white/10 border border-white/5 rounded-lg hover:bg-white/20 transition-colors duration-300"
                  onTouchStart={() => handleMoveStart(1)}
                  onTouchEnd={handleMoveEnd}
                  onMouseDown={() => handleMoveStart(1)}
                  onMouseUp={handleMoveEnd}
                  onContextMenu={(e) => e.preventDefault()} // Preventing long press menu
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <div
                className={`fixed bottom-8 text-xs text-center left-1/2 -translate-x-1/2 duration-500 opacity-0 animate-fadeInControls font-medium ${
                  showInstructions ? "text-white/100 " : "text-white/0"
                }`}
              >
                Use the arrow keys to move
              </div>
            )}
          </div>
        ) : (
          <div className="relative h-[calc(100dvh-24px)] w-full overflow-y-scroll p-5 no-scrollbar">
            <div className="fixed top-3 left-3 right-3 bottom-3 overflow-hidden">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1434px] opacity-0 animate-fadeInTextBg">
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
            </div>
            <div className="flex flex-col gap-6 font-display text-3xl sm:text-4xl !leading-[1.4] max-w-screen-sm mx-auto pt-24 pb-24 sm:pt-32 sm:pb-48 opacity-0 animate-fadeInText">
              <p>Hi, I&apos;m Eric.</p>
              <p>
                I&apos;m the co-founder of{" "}
                <a
                  href="https://getversive.com"
                  target="_blank"
                  className="focus:outline-none hover:opacity-50 transition-opacity duration-500 focus:opacity-50"
                >
                  Versive
                </a>
                , an AI-first survey platform.
              </p>
              <p>
                I&apos;m a self-taught designer, developer, and product manager.
                I&apos;ve worked at tiny startups and public companies. Most
                recently I was at Vareto, Uber, and Bread.
              </p>
              <p>
                In a past life, I worked in finance and studied economics at the
                University of Chicago.
              </p>
              <p>
                I&apos;m originally from the Chicago suburbs and currently live
                in Brooklyn, NY.
              </p>
            </div>
          </div>
        )}

        <Menu gameMode={gameMode} setGameMode={setGameMode} />
      </div>
      <div
        className={`fixed top-3 left-3 right-3 bottom-3 transition-colors duration-5000 pointer-events-none ${
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
