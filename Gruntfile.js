/* global module */
/* global require */
module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    package: grunt.file.readJSON('package.json'),
    banner: "/*! <%= package.title || package.name %> - v<%= package.version %> - " + "<%= grunt.template.today(\"yyyy-mm-dd\") %>\n" + "* Copyright (c) <%= grunt.template.today(\"yyyy\") %> <%= package.author.name %>;" + " Licensed <%= package.licenses %> */\n",
    // task
    sass: {
      // target
      theme: {
        options: {
          // note* requires SASS >=3.3.0 `gem install sass --pre`
          sourcemap: true,
          loadPath: [
            'bower_components',
            'bower_components/bootstrap-sass-official/vendor/assets/stylesheets'
          ]
        },
        // files
        files: [{
          dest: 'dist/css/awesome-theme.css',
          src: 'scss/main.scss'
        }, {

        }]
      }
    },
    autoprefixer: {
      theme: {
        options: {
          map: true
        },
        src: [
          'dist/css/**/*.css',
          '!dist/css/**/*.min.css',
        ] // can leave the dest off
      }
    },
    cssmin: {
      theme: {
        options: {
          banner: '<%= banner %>',
        },

        expand: true,
        cwd: 'dist/css/',
        src: [
          '**/*.css',
          '!**/*.min.css'
        ],
        ext: '.min.css',
        dest: 'dist/css/'
      }
    },
    watch: {
      scss: {
        files: 'scss/**/*.scss',
        tasks: [
          'sass:theme',
          'autoprefixer:theme'
        ]
      },
      js: {
        files: 'src/**/*.js',
        tasks: 'buildjs'
      },
      grunt: {
        files: 'Gruntfile.js',
        tasks: 'jshint:grunt'
      },
      livereload: {
        files: 'dist/**/*{.js|.css}', // Will only trigger reload once they are done being done.
        options: {
          livereload: true
        }
      }
    },
    jshint: {
      options: {
        jshintrc: true,
        reporter: require('jshint-stylish')
      },
      grunt: {
        files: {
          src: 'Gruntfile.js'
        }
      },
      themejs: {
        files: {
          src: 'src/**/*.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask(
    'default',
    'build css', [
      'buildcss'
    ]
  );
  grunt.registerTask(
    'buildcss',
    'Compile SASS, Vendor Prefix minifi it', [
      'sass:theme',
      'autoprefixer:theme',
      'cssmin:theme'
    ]
  );
  grunt.registerTask(
    'buildjs',
    'Lint, test and bundle theme\'s JS', ['jshint:themejs']
  );
};
