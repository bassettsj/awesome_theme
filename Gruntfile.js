module.exports = function(grunt){
  grunt.initConfig({
    package: grunt.file.readJSON('package.json'),
    // task
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
        },{

        }]
      }
    },
    phplint: {
      template: ['template.php']
    },
    phpcs: {
      theme: {
        dir: ['template.php'],
        options: {
          bin: './vendor/bin/phpcs',
          standard: 'Drupal'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-phplint');
  grunt.loadNpmTasks('grunt-phpcs');
  grunt.registerTask(
    'default',
    'Compile SASS',
    ['sass:theme']
  );
};
