/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 20s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },

      backgroundImage: {
        aboutBg:
          "linear-gradient(90deg, rgba(56,69,96,1) 0%, rgba(0,0,0,1) 100%)",
      },
    },
  },
  plugins: [],
};
