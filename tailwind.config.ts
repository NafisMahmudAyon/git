import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        code: "var(--code-color)",
        normal: "var(--font-normal)",
        inner: "var(--inner-color)",
        comment: "var(--comment-color)",
      },
    },
  },
  plugins: [],
};
export default config;
