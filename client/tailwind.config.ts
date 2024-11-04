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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "yellow": "#F7B559",
        "white": "#FFFFFF",
        "blue": "#1A3664C",
        "black": "#222222",
        "green": "#009760",
        "orange": "#DC840A",
        "off-white": "#F9FFFF",
      },
    },
  },
  plugins: [],
};
export default config;
