/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      primary: '#2563eb', // bleu
      secondary: '#64748b', // gris
      'muted-foreground': '#6b7280',
    },
  },
},
  plugins: [],
}