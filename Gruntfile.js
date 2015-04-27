'use strict';

module.exports = function (grunt) {
  require('time-grunt')(grunt);

  grunt.initConfig({

    mochaTest: {
      all: {
        options: {reporter: 'spec'},
        src: ['test/spec.js']
      }
    }

  });

  // Load all grunt tasks matching the `grunt-*` pattern.
  require('load-grunt-tasks')(grunt);

  grunt.registerTask('test2', ['mochaTest']);
  grunt.registerTask('test', function(arg1){
	  grunt.log.writeln(arg1);
  });
  grunt.registerTask('default', ['test']);
};
