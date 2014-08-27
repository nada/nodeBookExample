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
				src: ['qa/tests-crosspage.js', 'qa/tests-unit.js'], options: { ui: 'tdd' },
			}
		}, jshint: {
			app: ['index.js', 'public/js/**/*.js',
					'lib/**/*.js'],
			qa: ['Gruntfile.js', 'qa/**/*.js'],
		} 
	});

	// register tasks
	grunt.registerTask('default', ['jshint', 'cafemocha']);
};