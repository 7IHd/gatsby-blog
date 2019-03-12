/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path");

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "styled-components": path.resolve(
          __dirname,
          "node_modules",
          "styled-components"
        ),
        "molecules": path.resolve(
          __dirname,
          "src",
          "components",
          "molecules"
        ),
        "atoms": path.resolve(
          __dirname,
          "src",
          "components",
          "atoms"
        ),
        "layout": path.resolve(
          __dirname,
          "src",
          "components",
          "layout"
        ),
        "core": path.resolve(
          __dirname,
          "src",
          "components"
        )
      }
    }
  });
};
