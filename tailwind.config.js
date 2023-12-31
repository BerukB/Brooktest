/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    boxShadow: {
      boxmod: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
      filterBoxSadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
    },
    extend: {
      colors: {
        mainBg: "#94a3b8",
        primary: 'hsl(202, 18%, 24%)',
        secondary: 'hsl(9, 87%, 63%)',
        desaturatedDarkCyan: "hsl(180, 29%, 50%)",
        lightGrayishCyanBg: "hsl(180, 52%, 96%)",
        lightGrayishCyan: "hsl(180, 31%, 95%)",
        darkGrayishCyan: "hsl(180, 8%, 52%)",
        veryDarkGrayishCyan: "hsl(180, 14%, 20%)",
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
    },
    fontFamily: {
      leagueSpartan: ["League Spartan", "sans-serif"],
    },
    fontWeight: {
      regular: "500",
      bold: "700",
    },
    fontSize: {
      newSize: ["14px"],
    },
    },
  },
  plugins: [],
}

