module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @import "src/sass/main.scss";
        `,
      },
    },
  },
  plugins: [
    {
      plugin: require('craco-plugin-scoped-css')
    }
  ]
};