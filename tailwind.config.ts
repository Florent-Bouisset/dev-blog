import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [],
  theme: {
    colors: {
      black: "#0c0a09",
      grey: "##fafaf9",
      primary: "#facc15",
    },
    extend: {
      fontFamily: {
        Lora: ["Lora", "serif", "sans-serif"],
      },
    },
  },
  plugins: [],
};
