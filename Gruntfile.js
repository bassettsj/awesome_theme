module.exports = function(grunt){
  grunt.initConfig({
    package: grunt.file.readJSON('package.json'),    // task
    sass: {
      // target
      theme:{
        options:{
          // note* requires SASS >=3.3.0 `gem install sass --pre`
          sourcemap: true
        },
        // files
        files: [{
          dest: 'dist/css/awesome-theme.css',
          src: 'scss/main.scss'
        }]
      }
    },
    autoprefixer:{
      theme: {
        options:{
          map: true
        },
        src: '<%= sass.theme.files[0].dest %>' // can leave the dest off
      }
    },
    browserify: {
      themejs: {
        dest: './dist/js/awesome-theme.pkg.js',
        src: './src/index.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.registerTask(
    'default',
    'Compile SASS and autoprefix the css',
    [
      'sass:theme',
      'autoprefixer:theme'
    ]
  );
};
