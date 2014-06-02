module.exports = function(grunt) {

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
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

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
};
