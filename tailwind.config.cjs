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
        Custom: "15px 15px 15px 5px rgba(174,223,247,0.5)",
        CustomCard: "0px 0px 5px 20px rgba(174,223,247,0.5)",
        CustomCardHover: "inset 0px 0px 5px 8px rgba(174,223,247,0.5)",
      },
      colors: {
        BluePastel: "#AEDFF7",
        BlueAqua: "#00BFFF",
      },
    },
  },
};
