/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        night: "#080B14",
        dark: "#101828",
        gold: "#D4AF37",
        cream: "#F8F5EE",
        pure: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Cormorant Garamond", "serif"],
      },
      boxShadow: {
        aureate: "0 0 80px rgba(212, 175, 55, 0.24)",
        velvet: "0 32px 110px rgba(0, 0, 0, 0.46)",
      },
      animation: {
        "float-lux": "floatLux 6s ease-in-out infinite",
        "slow-spin": "slowSpin 34s linear infinite",
        "gold-pulse": "goldPulse 3.2s ease-in-out infinite",
        "marquee": "marquee 28s linear infinite",
      },
      keyframes: {
        floatLux: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" },
        },
        slowSpin: {
          to: { transform: "rotate(360deg)" },
        },
        goldPulse: {
          "0%, 100%": { opacity: ".42", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
