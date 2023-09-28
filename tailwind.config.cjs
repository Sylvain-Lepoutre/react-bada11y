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
      width: {
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
      },
    },
  },
};
