module.exports = {
  options: {
    livereload: true
  },
  js: {
    files: ['js/**/*.js']
  },
  sass: {
    files: ['scss/{,*/}*.scss'],
    tasks: ['sass:server']
  },
  html: {
    files: ['*.html']
  }
};