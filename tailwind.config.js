import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gryffindor: {
          red: "#7F0909",
          gold: "#D4AF37",
        },
      },
    },
  },
  plugins: [],
}

export default config
