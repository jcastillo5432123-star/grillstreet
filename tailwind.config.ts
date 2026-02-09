import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"] ,
  theme: {
    extend: {
      colors: {
        charcoal: "#111213",
        steel: "#8b8f94",
        ember: "#f97316",
        ash: "#1c1f22",
        sand: "#f5f3ee"
      },
      fontFamily: {
        heading: ["'Oswald'", "'Helvetica Neue'", "Arial", "sans-serif"],
        body: ["'Inter'", "'Helvetica Neue'", "Arial", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(249, 115, 22, 0.15)"
      }
    }
  },
  plugins: []
};

export default config;
