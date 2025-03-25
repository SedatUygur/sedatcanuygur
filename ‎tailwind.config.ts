import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        border: "hsl(var(--border))",
        foreground: "hsl(var(--foreground))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        bright: {
          DEFAULT: "hsl(var(--bright))",
          foreground: "hsl(var(--bright-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        cloud: {
          DEFAULT: "hsl(var(--cloud))",
          foreground: "hsl(var(--cloud-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        dusk: {
          DEFAULT: "hsl(var(--dusk))",
          foreground: "hsl(var(--dusk-foreground))",
        },
        fog: {
          DEFAULT: "hsl(var(--fog))",
          foreground: "hsl(var(--fog-foreground))",
        },
        gleam: {
          DEFAULT: "hsl(var(--gleam))",
          foreground: "hsl(var(--gleam-foreground))",
        },
        midnight: {
          DEFAULT: "hsl(var(--midnight))",
          foreground: "hsl(var(--midnight-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--dusk))",
          foreground: "hsl(var(--dusk-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        radiance: {
          DEFAULT: "hsl(var(--radiance))",
          foreground: "hsl(var(--radiance-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--fog))",
          foreground: "hsl(var(--fog-foreground))",
        },
        shine: {
          DEFAULT: "hsl(var(--shine))",
          foreground: "hsl(var(--shine-foreground))",
        },
        solaralizedlight: {
          DEFAULT: "hsl(var(--solarized-light))",
          darkened: "hsl(var(--solarized-light-darkened))",
          foreground: "hsl(var(--solarized-light-foreground)",
        },
        solaralizeddark: {
          DEFAULT: "hsl(var(--solarized-dark))",
          darkened: "hsl(var(--solarized-dark-darkened))",
          foreground: "hsl(var(--solarized-dark-foreground)",
        },
        twilight: {
          DEFAULT: "hsl(var(--twilight))",
          foreground: "hsl(var(--twilight-foreground))",
        },
        warmth: {
          DEFAULT: "hsl(var(--warmth))",
          foreground: "hsl(var(--warmth-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
      },
      fontFamily: {
        mono: ["var(--font-geist-mono)"],
      },
      gridTemplateRows: {
        hero: "repeat(2, minmax(0, 0.5fr))",
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
      },
      scale: {
        101: "1.01",
      },
    },
  },
  darkMode: "class",
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
  prefix: "",
};
export default config;
