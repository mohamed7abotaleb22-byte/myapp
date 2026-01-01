/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "sandy-beige": "#D2B48C",
        "olive-green": "#556B2F",
        "date-brown": "#8B4513",
        "sand-light": "#F5F5DC",
        "reddish-date": "#FF4500",
      },
    },
  },
  plugins: [],
};