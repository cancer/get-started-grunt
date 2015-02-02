module.exports = function(grunt){

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      app: {
        src: [
          'src/js/1.js',
          'src/js/2.js'
        ],
        dest: 'dist/js/app.js'
      }
    },
    uglify: {
      app: {
        files: {
          'dist/js/app.min.js': ['dist/js/app.js']
        }
      }
    },
    sass: {
      options: {
        bundleExec: true
      },
      app: {
        files: [{
          expand: true,
          cwd: 'src/scss/',
          src: '**/*.scss',
          dest: 'dist/css/',
          ext: '.css'
        }]
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');


  grunt.registerTask('default', ['concat', 'uglify', 'sass']);

}
