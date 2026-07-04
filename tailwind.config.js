/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FBF6F1",
        ink: "#241417",
        plum: {
          DEFAULT: "#3D1F2B",
          light: "#5A2F3E",
        },
        rosewood: {
          DEFAULT: "#B4544C",
          dark: "#8F3F3A",
          light: "#D98A80",
        },
        blush: "#F4DEDA",
        gold: "#B8935F",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Manrope", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      backgroundImage: {
        "ticket-perf":
          "radial-gradient(circle, transparent 6px, #FBF6F1 6.5px)",
      },
    },
  },
  plugins: [],
};
