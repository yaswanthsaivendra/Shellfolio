module.exports = {
  content: [
    './public/**/*.{html,js}',
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors : {
        backcolor:"#222f3e",
        primary : "#008080",
        secondary : "#808080",
      }
      
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}
