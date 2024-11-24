import { addScaleCorrector } from "framer-motion";
import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs:"320px",
      xxs:"360px",
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily:{
        sans: 'var(--font-sans)',
        serif:'var(--font-serif)',
      },
      fontSize: {
        'xxs': '0.625rem', // Custom size (10px)
        'xx':'0.5rem',   // Custom size (48px)
      },
      animation: {
        'ping-large': "ping-large 1s ease-in-out infinite",
        'move-left': "move-left 1s linear infinite",
        'move-right': "move-right 1s linear infinite",
        'border-spin':"border-spin 1s linear infinite",
      },
      keyframes:{
        'ping-large':{
          '75%,100%':{
            transform: 'scale(3)',
            opacity: '0',
          },
        },
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
        'move-left': {
          '0%': {
            transform: "translateX(0%)",
          },
          '100%': {
            transform: "translateX(-50%)",
          },
        },
        "move-right": {
          "0%": {
            transform: "translateX(-50%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
