/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        servicesCard: "0 12px 20px -5px rgba(94,0,218,.4)",
        servicesCardHover: "0 12px 20px -5px rgba(94, 0, 218, 0.565)",
        shadow_card: "inset 0 -100px 70px -70px rgba(72,0,160,.7)",
        division: "inset"
      },
    },
  },
  plugins: [],
};
