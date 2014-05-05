/*global module:false*/
module.exports = function(grunt) {

	require('time-grunt')(grunt);

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		config: grunt.file.readJSON('grunt/_config.json')
	});

	//grunt.loadTasks('grunt/_config.js');
	grunt.loadTasks('grunt');

	grunt.registerTask('serve', 
		'Starts a static webserver with livereload',
		function (target) {

			var tasks = [];

			if (target === 'dist') {
				return grunt.task.run(['build', 'connect:dist:keepalive']);
			} else if(target === 'dev') {
				tasks = ['dev', 'configureRewriteRules', 'connect:livereload', 'watch'];
			} else {
				tasks = ['build', 'configureRewriteRules', 'connect:livereload', 'watch'];
			}

			grunt.task.run(tasks);

		}

	);

	grunt.registerTask('dev',
		'Quickly build site files for development.',
		[
			'clean:dev',
			'copy:dev',
			'useminPrepare',
			//'bowerInstall',
			'compass:dev',
			'concat',
			'uglify',
			'cssmin',
			'autoprefixer',
			//'rev',
			'usemin',
			'newer:imagemin',
			'newer:svgmin',
			//'clean:post'
		]
	);

	grunt.registerTask('build',
		'Build site files for deployment.',
		[
			'clean:pre',
			'copy:prod',
			'useminPrepare',
			//'bowerInstall',
			'compass:prod',
			'concat',
			'uglify',
			'cssmin',
			'autoprefixer',
			'compress:gzip',
			'rev',
			'usemin',
			'imagemin',
			'svgmin',
			'htmlmin',
			'replace:prod',
			'clean:post'
		]
	);

	grunt.registerTask('deploy', 
		'Deploys dist/htdocs folder on a public webserver via ftp',
		function(target) {

			if (target === 'live') {

				return grunt.task.run(['build', 'ftpush:live']);

			} else {

				return grunt.task.run(['build', 'ftpush:stage']);

			}

		}

	);

	grunt.registerTask('default', ['serve:dev']);
	//grunt.registerTask('default', ['build', 'watch']);


};
