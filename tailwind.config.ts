import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef5ff",
          100: "#d9e8ff",
          500: "#1f6fff",
          600: "#1658d6",
          700: "#1549ad",
        },
      },
      boxShadow: {
        glow: "0 20px 60px rgba(16, 37, 81, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
