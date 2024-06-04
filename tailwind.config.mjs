/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        body: {
          DEFAULT: "hsl(50, 72%, 98%)",
          on: {
            DEFAULT: "hsl(330, 7%, 10%)",
            dim: "hsl(330, 7%, 5%)"
          },
          container: {
            DEFAULT: "hsl(50, 72%, 85%)",
            on: "hsl(50, 72%, 20%)"
          }
        },
        outline: "hsl(330, 7%, 40%)"
      },
      spacing: {
        "window-sm": "24px",
        window: "48px"
      }
    }
  },
  plugins: []
};
