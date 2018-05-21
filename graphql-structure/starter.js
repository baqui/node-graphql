// Transpile all code following this line with babel and use 'env' (aka ES6) preset.
require('babel-register')({
  presets: ['env'],
  plugins: ['transform-object-rest-spread', 'transform-class-properties']
});

// Import the rest of our application.
module.exports = require('./app.js');
