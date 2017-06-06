module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: ['js/btn.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint']);

};