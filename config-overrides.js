// config-overrides.js
const path = require('path');

module.exports = function override(config, env) {
  // Add your webpack customization here
  config.resolve.fallback = {
    "path": require.resolve("path-browserify"),
    "util": require.resolve("util/")
  };

  return config;
};
