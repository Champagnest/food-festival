const webpack = require("webpack")
const path = require("path");

module.exports = {
  entry: "./assets/js/script.js",
  events: "./assets/js/events.js",
  schedule: "./assets/js/schedule.js",
  tickets: "./assets/js/tickets.js",

  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js"
  },
  plugins: [
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
  }),
  ],
  mode: "development"
};