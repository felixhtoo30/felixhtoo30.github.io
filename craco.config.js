// craco.config.js
module.exports = {
  eslint: null,
  style: {
    postOptions: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.externals = {
        // canvg: "canvg",
        // html2canvas: "html2canvas",
        // dompurify: "dompurify"
      }
      return webpackConfig;
    }
  }
}