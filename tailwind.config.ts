import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
        'spin-slow': 'spin 1s ease-out ',
        spinText: 'spinText 30s linear infinite',
      },
      
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "80%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-1400px)",
            opacity: "0",
          },
        },
        spinText: {
          to: { transform: 'rotate(360deg)'}
        }
      },
      
    },
    boxShadow : {
      shadowtop : '0px 0px 50px 6px rgba(255, 253, 253, 0.43)'
    }

},


  plugins: [],
};


export default config;
