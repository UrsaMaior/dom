module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: ['js/btn.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint']);

};

var buttons = document.getElementsByClassName("btn");

for(i=0;i<buttons.length;i++) {

	console.log(buttons[i].innerText);
}
