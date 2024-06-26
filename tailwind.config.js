/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        sectionBorder: "inset 0 0 50px 0 #000000",
        servicesCard: "0 12px 20px -5px rgba(94,0,218,1)",
        servicesCardHover: "0 12px 20px -5px rgba(94, 0, 218, 0.565)",
      },
    },
  },
  plugins: [],
};
