/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-inter), ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
        ],
        display: [
          "var(--font-mondwest), var(--font-inter), ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(24px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeInUpControls: {
          "0%": {
            opacity: "0",
            transform: "translateY(8px) translateX(-50%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) translateX(-50%)",
          },
        },
        panIn: {
          "0%": {
            opacity: "0",
            transform: "translateX(-480px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        fadeInText: "fadeInUp 1s ease-out forwards 0.4s",
        fadeInBackground:
          "panIn 2.5s cubic-bezier(0.33, 1, 0.68, 1) forwards 1.9s",
        fadeInSprite: "fadeIn 0.4s linear forwards 4.5s",
        fadeInControls: "fadeInUpControls 0.4s linear forwards 4.9s",
      },
    },
  },
  plugins: [],
};
