module.exports = (config) => [
  require("stylelint")(),
  require("postcss-cssnext")({
    browsers: "last 4 versions",
    features: {
      customProperties: {
        variables: {
          maxWidth: "60rem",
          colorPrimaryDark: "#107491",
          colorPrimary: "#007acc",
          colorSecondaryDark: "#22846C",
          colorSecondary: "#46BE77",
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
