module.exports = function(grunt){


  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-browser-sync');


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
    },
    browserSync: {
      app: {
        bsFiles: {
          src: [
            'dist/**/*',
            'index.html'
          ]
        },
        options: {
          server: {
            baseDir: "./",
            directory: true
          },
          watchTask: true
        }
      }
    },
    watch: {
      js: {
        files: ['src/js/**/*.js'],
        tasks: ["concat", "uglify"]
      },
      sass: {
        files: ['src/scss/**/*.scss'],
        tasks: ['sass']
      }
    }
  });


  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'browserSync', 'watch']);

}
