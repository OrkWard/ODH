// @ts-check
/** @type {import('@babel/core').TransformOptions} */
module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-typescript"],
  plugins: [["@babel/plugin-proposal-decorators", { version: "2023-05" }]],
};
