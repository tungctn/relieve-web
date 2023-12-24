import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#1B2C56",
        secondary: "#7EA8F9",
        yellow: "#FCEABC",
        blue: "#B9E9FD",
        purple: "#DFCFF6",
        green: "#C8FFC7",
      },
      fontFamily: {
        plus: ["Plus", "ui-sans-serif"],
        plusBold: ["PlusBold", "ui-sans-serif"],
        plusMedium: ["PlusMedium", "ui-sans-serif"],
        plusLight: ["PlusLight", "ui-sans-serif"],
        plusExtraBold: ["PlusExtraBold", "ui-sans-serif"],
        poppins: ["Poppins", "ui-sans-serif"],
        lato: ["Lato", "SFMono-ui-monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
