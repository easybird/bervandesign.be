module.exports = (config) => [
  require("stylelint")(),
  require("postcss-cssnext")({
    browsers: "last 4 versions",
    features: {
      customProperties: {
        variables: {
          maxWidth: "60rem",
          colorPrimaryDark: "#27ae60",
          colorPrimary: "#2ecc71",
          colorSecondaryDark: "#2c3e50",
          colorSecondary: "#34495e",
          colorNeutralDark: "#111",
          colorNeutral: "#8C8D91",
          colorNeutralLight: "#FBFCFC",
          colorWhite: "#fff",
          colorBlack: "#000",
          colorText: "#555",
        },
      },
    },
  }),
  require("postcss-reporter")(),
  ...!config.production ? [
    require("postcss-browser-reporter")(),
  ] : [],
]
