import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#F9F8F6",        // Off-white / paper cream retro
          dark: "#0F0F10",      // Charcoal pitch black
          darker: "#080809",
          muted: "#71717A",     // Cool gray
          subtle: "#A1A1AA",
          border: "#E4E4E7",    // Fine light border
          borderDark: "#27272A",
          accent: "#C25E3E",    // Terracotta retro accent
          accentHover: "#A84C2F",
          olive: "#4A5240",     // Muted retro army olive
        },
      },
      fontFamily: {
        sans: [
          "var(--font-geist-sans)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "sans-serif",
        ],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        widest: "0.15em",
        mega: "0.25em",
      },
    },
  },
  plugins: [],
};
export default config;
