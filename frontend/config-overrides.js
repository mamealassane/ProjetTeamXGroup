const path = require('path');

module.exports = function override(config, env) {
  // Ajoutez le fallback pour le module http
  config.resolve.fallback = {
    ...config.resolve.fallback,
    http: require.resolve('stream-http'),
  };
  
  return config;
}
