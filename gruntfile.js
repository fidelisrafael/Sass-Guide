module.exports = function (grunt) {
  'use strict';
  // Configurations
  grunt.initConfig({
    compass: {
      dist: {
        options: {
          config: 'config.rb',
          trace: true
        }
      }
    },
    jslint: {
      server: {
        src: ['dev/*.js', 'dev/**/*.js'],
        exclude: ['dev/lib/*.js'],
        directives: {
          node: true,
          todo: true
        },
        options: {
          junit: 'out/server-junit.xml',
          log: 'out/server-lint.log',
          jslintXml: 'out/server-jslint.xml',
          errorsOnly: true,
          failOnError: false,
          checkstyle: 'out/server-checkstyle.xml'
        }
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          angular: true
        },
        ignores: ['dev/js/lib/*.js']
      },
      files: ['dev/js/*.js']
    },
    uglify: {
      options: {
        report: 'gzip',
        preserveComments: false,
        beautify: false
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'dev/js',
          src: '**/*.js',
          dest: '_public/js'
        }]
      }
    },
    watch: {
      css: {
        files: ['dev/sass/*.scss', 'dev/sass/**/*.scss'],
        tasks: ['compass']
      },
      scripts: {
        files: ['dev/js/*.js', 'dev/js/**/*.js'],
        tasks: ['uglify']
      }
    }
  });

  // load tasks
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jslint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('w', ['watch']);
  grunt.registerTask('build', ['compass', 'jslint', 'jshint']);
};