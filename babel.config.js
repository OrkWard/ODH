// @ts-check
/** @type {import('@babel/core').TransformOptions} */
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: "defaults" }],
    ["@babel/preset-typescript", { allowDeclareFields: true }],
  ],
  plugins: [["@babel/plugin-proposal-decorators", { version: "2023-11" }]],
};
