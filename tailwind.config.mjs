/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        custom:
          "0px 28px 11px rgba(255, 255, 255, 0.01), 0px 16px 10px rgba(255, 255, 255, 0.03), 0px 7px 7px rgba(255, 255, 255, 0.05), 0px 2px 4px rgba(255, 255, 255, 0.06)",
      },
    },
  },
  plugins: [],
};
