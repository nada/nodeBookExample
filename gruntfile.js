module.exports = function(grunt){ 
	
	// load plugins
	[
		'grunt-cafe-mocha',
		'grunt-contrib-jshint',
	].forEach(function(task){ 
		grunt.loadNpmTasks(task);
	});

	// configure plugins
	grunt.initConfig({
		cafemocha: {
			all: { 
				src: ['public/qa/tests-crosspage.js', 'public/qa/tests-unit.js'], options: { ui: 'tdd' },
			}
		}, jshint: {
			app: ['index.js', 'public/js/**/*.js',
					'lib/**/*.js'],
			qa: ['Gruntfile.js', 'public/qa/**/*.js', 'qa/**/*.js'],
		} 
	});

	// register tasks
	grunt.registerTask('default', ['jshint', 'cafemocha']);
};