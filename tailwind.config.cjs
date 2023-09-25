/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./**/*.{mdx,tsx}"],
  plugins: [
    "@tailwindcss/aspect-ratio",
    "@tailwindcss/container-queries",
    "@tailwindcss/forms",
    "@tailwindcss/typography",
  ],
  theme: {
    extend: {
      boxShadow: {
        Custom: "25px 25px 18px 5px rgba(174,223,247,0.49)",
        CustomCard: "0px 0px 5px 20px rgba(174,223,247,0.5)",
        CustomCardHover: "inset 0px 0px 5px 20px rgba(174,223,247,0.5)",
      },
      colors: {
        BluePastel: "#AEDFF7",
        BlueAqua: "#00BFFF",
      },
    },
  },
};
