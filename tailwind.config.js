/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        servicesCard: "0 12px 20px 0 rgba(0,0,0,.2)",
        servicesCardHover: "3px 10px 25px 0px rgba(0,0,0,.7)",
        shadow_card: "inset 0 -100px 70px -70px rgba(72,0,160,.7)",
        division: "inset"
      },
    },
  },
  plugins: [],
};
