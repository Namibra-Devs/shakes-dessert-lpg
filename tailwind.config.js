import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  variants: {
    display: ["responsive", "group-hover", "group-focus"],
  },
  theme: {
    extend: {
      fontFamily: {
        primary: "Quicksand",
      },
      backgroundImage: {
        primarybg: "url(../src/assets/home/bg.png)",
      },
    },
  },
  plugins: [forms, typography],
};
