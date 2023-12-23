/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Complex site-specific column configuration
        footer: "70% 1fr",
      },
    },
  },
  plugins: [],
};
