module.exports = function(grunt){
  grunt.initConfig({
    package: grunt.file.readJSON('package.json'),
    // task
    sass: {
      // target
      theme:
        options:{
          // note* requires SASS >=3.3.0 `gem install sass --pre`
          sourcemap: true
        },
        // files
        files: [{
          dest: 'dist/css/awesome-theme.css'
          src: 'scss/main.scss'
        }]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask(
    'default',
    'Compile SASS',
    ['sass:theme']
  );
};
