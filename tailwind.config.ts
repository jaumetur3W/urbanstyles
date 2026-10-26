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
        chalk: "#F7F6F2",       // Warm chalk artisan background
        bone: "#ECEAE4",
        concrete: "#D8D6CE",
        charcoal: "#111111",    // Brutalist deep charcoal
        pitch: "#080808",
        raw: "#7E7B73",
        umber: "#B35434",       // Artisan warm terracotta accent
        line: "rgba(17, 17, 17, 0.14)", // 1px sharp structural border
      },
      fontFamily: {
        sans: [
          "var(--font-geist-sans)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Helvetica Neue",
          "sans-serif",
        ],
        mono: [
          "var(--font-geist-mono)",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tightest: "-0.06em",
        widest: "0.2em",
        mega: "0.3em",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        "marquee-fast": "marquee 15s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
