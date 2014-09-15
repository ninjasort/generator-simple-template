module.exports = function(grunt) {

  var options = {
    paths: {
      app: 'app',
      dist: 'dist'
    }
  };

  require('load-grunt-tasks')(grunt);
  
  var configs = require('load-grunt-configs')(grunt, options);
  grunt.initConfig(configs);

  grunt.registerTask('default', [
    'connect',
    'sass:server',
    'watch'
  ]);

};
