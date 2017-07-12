module.exports = {
  entry: './app/app.jsx', // where webpack to start processing code
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname, // ('HelloReact' folder) allows you to remove './' from path to required components
    alias: {
    },
    extensions: ['', '.js', '.jsx'] // list of file extensions we want to process
  },
  module: {
    loaders: [ // list of loaders, each loader is within an object
      {
        loader: 'babel-loader', // tell babel-loader to get files, and parse them with react and es2015
        query: { // tell loader what to do
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/, // which files to get (in this case, all *.jsx files)
        exclude: /(node_modules|bower_components)/ // folders to exclude
      }
    ]
  }
};