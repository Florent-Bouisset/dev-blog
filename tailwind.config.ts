import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [],
  theme: {
    colors: {
      primary: "#facc15",
      white: "#ffffff",
      background: "#0c0a09",
      grey: {
        200: "#fafaf9",
        400: "#e7e5e4",
        600: "#f5f5f4",
        800: "#969695",
        1000: "#171413",
      },
      error: "#ef4444",
    },
    extend: {
      fontFamily: {
        Lora: ["Lora", "serif", "sans-serif"],
      },
    },
  },
  plugins: [],
};
