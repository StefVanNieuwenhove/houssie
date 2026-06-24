import type { Config } from "tailwindcss"

const config = {
  theme: {
    conatiner: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
  },
} satisfies Config

export default config
