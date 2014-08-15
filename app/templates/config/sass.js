module.exports = {
  options: {
    includePaths: require('node-bourbon').includePaths
  },
  dist: {
    options: {
      outputStyle: "compressed"
    },
    files: {
      "css/main.css": "scss/*.{scss,sass}"
    }
  },
  server: {
    options: {
      outputStyle: "nested"
    },
    files: {
      "css/main.css": "scss/{,*/}*.{scss,sass}"
    }
  }
};