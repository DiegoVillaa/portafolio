import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0E1013",
        surface: "#161920",
        surfaceHigh: "#1C2029",
        line: "#2A2F3A",
        paper: "#EDEBE6",
        muted: "#8B90A0",
        signal: "#5EEAD4",
        amber: "#F2A649",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "780px",
      },
    },
  },
  plugins: [],
};
export default config;
