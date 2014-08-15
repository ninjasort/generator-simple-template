module.exports = {
  options: {
    livereload: true
  },
  js: {
    files: ['js/**/*.js']
  },
  compass: {
    files: ['scss/{,*/}*.scss'],
    tasks: ['sass:server']
  },
  html: {
    files: ['*.html']
  }
};