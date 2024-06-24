import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "principal-image": 'url("/principalImage.jpg")',
        "expo-image": 'url("/Expo_Image.jpg")',

      },
      animation:
      {
        "loop-scroll": "loop-scroll 5s linear infinite",

      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-200px * 7))" },
        }
      }
    },
  },
  plugins: [],
};
export default config;
