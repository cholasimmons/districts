const path = require('path');

module.exports = {
  mode: 'production',
  entry: './lib/index.js', // Update the entry point to your compiled TypeScript file
  output: {
    filename: 'bundle.js', // Specify the desired name for your optimized bundle
    path: path.resolve(__dirname, 'lib')
  },
  optimization: {
    usedExports: true // Enable tree shaking
  }
};
