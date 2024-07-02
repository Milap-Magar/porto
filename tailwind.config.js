/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      kod: ["Kodchasan", "sans-serif"],
    },
    extend: {
      colors: {
        "btn-default-bg": "rgb(41, 41, 41)",
        "btn-hover-bg": "rgb(51, 51, 51)",
        "btn-shadow-color": "rgba(0, 0, 0, 0.137)",
        "hover-btn-color": "#fac921",
        "default-btn-color": "#fff",
      },
      spacing: {
        "btn-padding-x": "20px",
        "btn-padding-y": "15px",
      },
      fontSize: {
        btn: "16px",
      },
      fontWeight: {
        btn: "600",
      },
      boxShadow: {
        btn: "0 2px 10px 0 var(--btn-shadow-color)",
      },
      transitionDuration: {
        btn: "3s",
      },
      letterSpacing: {
        btn: "0.4rem",
      },
      animation: {
        chitchat: "chitchat 2s linear both",
      },
      keyframes: {
        chitchat: {
          "0%": { content: '"さ"' },
          "5%": { content: '"ご"' },
          "10%": { content: '"ま"' },
          "15%": { content: '"-!おい"' },
          "20%": { content: '"#D"' },
          "25%": { content: '"№:0ASDF"' },
          "30%": { content: '"#{+."' },
          "35%": { content: '"みなさい"' },
          "40%": { content: '"どういまして"' },
          "45%": { content: '"=.,^"' },
          "50%": { content: '"?2@%F"' },
          "55%": { content: '"しか"' },
          "60%": { content: '"?{%:%"' },
          "65%": { content: '"|{f[4"' },
          "70%": { content: '"{4%"' },
          "75%": { content: '"\'10<"' },
          "80%": { content: '"{0%"' },
          "85%": { content: "\"']>'" },
          "90%": { content: '"4"' },
          "95%": { content: '"2"' },
          "100%": { content: '""' },
        },
      },
    },
  },
  plugins: [],
};
