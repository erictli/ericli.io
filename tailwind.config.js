/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./contexts/**/*.{ts,tsx}",
  ],
  safelist: [
    // Text colors for theme switching
    "text-stone-950",
    "text-white",

    // Border colors for links
    "border-stone-950/20",
    "border-stone-950/30",
    "border-white/20",
    "border-white/30",
    "hover:border-stone-950/30",
    "hover:border-white/30",

    // Opacity classes
    "opacity-60",
    "opacity-70",

    // HR border colors
    "border-stone-950/10",
    "border-white/10",

    // Background colors for bottom nav
    "bg-stone-950/[4%]",
    "bg-stone-950/[6%]",
    "bg-white/[8%]",

    // Prose theme classes
    "prose-gray",
    "prose-invert",
    "prose-headings:text-gray-900",
    "prose-headings:text-white",
    "prose-p:text-gray-800",
    "prose-p:text-gray-200",
    "prose-a:text-gray-900",
    "prose-a:text-white",
    "hover:prose-a:text-gray-600",
    "hover:prose-a:text-gray-300",
    "prose-strong:text-gray-900",
    "prose-strong:text-white",
    "prose-li:text-gray-800",
    "prose-li:text-gray-200",
    "prose-hr:border-gray-200",
    "prose-hr:border-gray-700",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: [
          "var(--font-inter), ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
        ],
        display: [
          "var(--font-mondwest), var(--font-inter), ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
        ],
        "abc-diatype": [
          "var(--font-abc-diatype), ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
        ],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
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
        fadeInDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-16px)",
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
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeInText: "fadeInUp 1s ease-out forwards 0.4s",
        fadeInFigma: "fadeIn 1s ease-out forwards",
        fadeInTextBg: "fadeIn 1s ease-out forwards 1s",
        fadeInBackground:
          "panIn 2.5s cubic-bezier(0.33, 1, 0.68, 1) forwards 1.9s",
        fadeInSprite: "fadeIn 0.5s ease-out forwards 4.5s",
        fadeInControls: "fadeInUpControls 0.5s ease-out forwards 5.0s",
        fadeInMenu: "fadeInDown 0.5s ease-out forwards 5.5s",
      },
      transitionDuration: {
        1500: "1500ms",
        2000: "2000ms",
        5000: "5000ms",
        6000: "6000ms",
        8000: "8000ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
