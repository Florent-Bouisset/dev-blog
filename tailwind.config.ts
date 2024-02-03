import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [],
  theme: {
    colors: {
      primary: "#facc15",
      white: "#ffffff",
      background: "#0c0a09",
      grey: {
        200: "#cccccc",
        400: "#999999",
        600: "#666666",
        800: "#333333",
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
