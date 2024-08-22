import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        bodoniModa: "var(--font-bodini-moda)",
        barlow: "var(--font-barlow)",
        bellefair: "var(--font-bellefair)",
        redHatDisplay: "var(--font-red-hat-display)",
        cormorant: "var(--font-cormorant)",
        raleway: "var(--font-raleway)",
      },

      colors: {
        brown: "#4b4239",
        darkred: "#bb5943",
        brownlight1: "#6f6861;",
        brownlight2: "#a5a19c",

        background: "#1E1E1C",
        text: "#dfdede",
        textNumbers: "#636363",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
