module.exports = {
  entry: './public/app.js', // where webpack to start processing code
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'] // list of file extensions we want to process
  }
};