module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify:{
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			project: {
				files: {
					'js/dist/hb.min.js': ['js/dist/hb.dev.js'],
					'js/dist/lineupwidget.min.js': ['js/dist/lineupwidget.dev.js']
				}
			}
		},
		cssmin:{
			options:{
				mergeIntoShorthands: false
			},
			target:{
				files:{
					"css/dist/styles.css": [ "css/redux.dev.css", "css/_mediaqueries.css", "css/_animations.css" ]
				}
			}
		},
		concat:{
			hb:{
				src : [
					"js/handlebars.runtime.js",
					"js/dist/hb.tpls.js",
					"js/chelp.js",
				],
				dest : 'js/dist/hb.dev.js'
			},
			lineupwidgetprod:{
				src : [
					"js/jquery-1.7.2.min.js",
					"js/modernizr.custom.js",
					"js/tabs.js",
					"js/transitions2.js",
					"js/lineupwidget.dev.js",
				],
				dest : 'js/dist/lineupwidget.dev.js'
			}
		},
		handlebars: {
			compile: {
				options: {
					namespace : "Handlebars.templates",
					processName: function(filePath) {
						var pieces = filePath.split("/");
						grunt.log.writeln( "Registering " + pieces[pieces.length - 1].split('.')[0] );
						return pieces[pieces.length - 1].split('.')[0];
					}/*,
					partialsUseNamespace: true,
					processPartialName: function(filePath) {
						var pieces = filePath.split("/");
						grunt.log.writeln( "Registering " + pieces[pieces.length - 1].split('.')[0] );
						return "_" + pieces[pieces.length - 1].split('.')[0];
					}*/
				},

				files: {
					'js/dist/hb.tpls.js': [
						'views/**/*.html'
					]
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.log.writeln( "Compiling Lineup Widget" );
	grunt.registerTask('default', ["handlebars", "concat", "uglify", "cssmin" ]);
};