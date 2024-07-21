import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rainbow: {
          '0%, 100%': { color: '#FF0000' }, // Red
          '16%': { color: '#FF7F00' }, // Orange
          '33%': { color: '#FFFF00' }, // Yellow
          '50%': { color: '#00FF00' }, // Green
          '66%': { color: '#0000FF' }, // Blue
          '83%': { color: '#4B0082' }, // Indigo
          '100%': { color: '#8B00FF' }, // Violet
        },
      },
      animation: {
        rainbow: 'rainbow .5s linear infinite',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
