export const spritesheet = "/images/spritesheet-eric.svg";
export const spriteWidth = 64 * 2;
export const spriteHeight = 96 * 2;
export const standingFrameChange = [1600, 200]; // Duration in milliseconds for each standing frame
export const walkingFrameRate = 150; // Time in milliseconds for each walking frame
export const moveSpeed = 6; // Pixels to move per frame
export const jumpVelocity = -12; // Initial velocity for the jump, negative for upward
export const gravity = 0.6; // Gravity applied to the character
export const textPositions = [
  0,
  1434 + 560 / 2 - 160 - 320, // Need to subtract the width of the previous text
  1434 + 560 + 240 + 880 / 2 - 160 - 320 * 2,
  1434 + 560 + 240 + 880 + 80 + 896 / 2 - 160 - 320 * 3,
  1434 + 560 + 240 + 880 + 80 + 896 + 40 + 1170 / 2 - 160 - 320 * 4,
  1434 + 560 + 240 + 880 + 80 + 896 + 40 + 1170 + 40 + 1170 / 2 - 160 - 320 * 5,
  1434 +
    560 +
    240 +
    880 +
    80 +
    896 +
    40 +
    1170 +
    40 +
    1170 +
    1170 -
    320 -
    320 * 6 -
    64, // Last message aligned to the right
];
export const textPositionTriggers = [
  0,
  1434 - 200, // Buffer of 200px
  1434 + 560 + 240 - 200, // Buffer of 200px
  1434 + 560 + 240 + 880 + 80,
  1434 + 560 + 240 + 880 + 80 + 896,
  1434 + 560 + 240 + 880 + 80 + 896 + 40 + 1170,
  1434 + 560 + 240 + 880 + 80 + 896 + 40 + 1170 + 40 + 1170,
];
export const backgroundWidth =
  1434 + 560 + 240 + 880 + 80 + 896 + 40 + 1170 + 40 + 1170 + 1170;
