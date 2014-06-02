module.exports = function(grunt) {
  grunt.initConfig({
    package: grunt.file.readJSON('package.json'),
    // task
    sass: {
      // target
      theme: {
        options: {
          // note* requires SASS >=3.3.0 `gem install sass --pre`
          sourcemap: true
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
        src: 'dist/css/**/*.css' // can leave the dest off
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask(
    'default',
    'Compile SASS & Vendor Prefix', [
      'sass:theme',
      'autoprefixer:theme'
    ]
  );
};
