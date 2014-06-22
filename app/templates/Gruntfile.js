module.exports = function(grunt) {

  grunt.initConfig({

    compass: {
      dev: {
        options: {
          outputStyle: 'compressed',
          sassDir: 'scss',
          cssDir: 'css',
          imagesDir: 'images',
          javascriptsDir: 'js'
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 3000,
          open: {
            target: 'http://localhost:3000',
            appName: 'open'
          }
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      js: {
        files: ['js/**/*.js']
      },
      compass: {
        files: ['scss/*.scss'],
        tasks: ['compass']
      },
      html: {
        files: ['*.html']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib');

  // Default task.
  grunt.registerTask('default', ['connect', 'watch']);

};
