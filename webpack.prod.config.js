const path = require('path');
const { createConfig } = require('@openedx/frontend-build');
const CopyPlugin = require('copy-webpack-plugin');

const config = createConfig('webpack-prod');

config.module.rules[0].exclude = /node_modules\/(?!(tinymce|@tinymce|@edx))/;

/**
 * See comment in webpack.dev.config.js for details on this rule and why it is needed.
 */
const webpack5esmInteropRule = {
  test: /\.m?js/,
  resolve: {
    fullySpecified: false,
  },
};

const otherRules = config.module.rules;

config.module.rules = [webpack5esmInteropRule, ...otherRules];

config.plugins.push(
  new CopyPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, './public/static'),
        to: path.resolve(__dirname, './dist/static'),
      },
    ],
  }),
);

module.exports = config;
