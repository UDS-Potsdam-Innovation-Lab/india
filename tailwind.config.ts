import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#040461",
          50: "#eef0ff",
          100: "#d9dcff",
          700: "#1e3a8a",
          800: "#0b0b6e",
          900: "#040461",
        },
        orange: {
          DEFAULT: "#fd9800",
          50: "#fff6e8",
          100: "#ffe4b8",
          500: "#f18800",
          600: "#fd9800",
          700: "#e07a00",
        },
        ink: "#1d1d1f",
        mist: "#e9f4ff",
        paper: "#f7f9fc",
        charcoal: "#0b0b0b",
        udsblue: "#040461",
      },
      fontFamily: {
        blinker: ["var(--font-blinker)", "Blinker", "sans-serif"],
        poppins: ["var(--font-poppins)", "Poppins", "sans-serif"],
      },
      boxShadow: {
        orange: "0 1px 10px 2px rgba(163, 63, 2, 0.32)",
        "orange-lg": "0 1px 15px 3px rgba(163, 63, 2, 0.5)",
      },
      borderRadius: {
        card: "15px",
      },
    },
  },
  plugins: [],
};

export default config;
