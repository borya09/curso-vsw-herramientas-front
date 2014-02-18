// Generated on 2013-09-18 using generator-angular 0.4.0
'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({ port: LIVERELOAD_PORT });
var mountFolder = function (connect, dir) {
	return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);

	// configurable paths
	var yeomanConfig = {
		app: 'app',
		dist: 'dist'
	};

	try {
		yeomanConfig.app = require('./bower.json').appPath || yeomanConfig.app;
	} catch (e) {
	}

	grunt.initConfig({
		yeoman: yeomanConfig,
		watch: {
			styles: {
				files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
				tasks: ['copy:styles', 'autoprefixer']
			},
			livereload: {
				options: {
					livereload: LIVERELOAD_PORT
				},
				files: [
					'.tmp/{,*/}*.html',
					'<%= yeoman.app %>/{,*/}*.html',
					'.tmp/styles/{,*/}*.css',
					'{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
					'<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
				]
			},
			compass: {
				files: ['<%= yeoman.app %>/styles/sass/{,*/}*.sass'],
				tasks: ['compass:dev']
			},
			jade: {
				files: ['<%= yeoman.app %>/{,*/}*.jade'],
				tasks: ['jade']
			}
		},
		autoprefixer: {
			options: ['last 1 version'],
			dist: {
				files: [
					{
						expand: true,
						cwd: '.tmp/styles/',
						src: '{,*/}*.css',
						dest: '.tmp/styles/'
					}
				]
			}
		},
		connect: {
			options: {
				port: 9000,
				// Change this to '0.0.0.0' to access the server from outside.
				hostname: 'localhost'
			},
			livereload: {
				options: {
					middleware: function (connect) {
						return [
							lrSnippet,
							mountFolder(connect, '.tmp'),
							mountFolder(connect, yeomanConfig.app)
						];
					}
				}
			},
			dist: {
				options: {
					middleware: function (connect) {
						return [
							mountFolder(connect, yeomanConfig.dist)
						];
					}
				}
			}
		},
		open: {
			server: {
				url: 'http://localhost:<%= connect.options.port %>'
			}
		},
		clean: {
			dist: {
				files: [
					{
						dot: true,
						src: [
							'.tmp',
							'<%= yeoman.dist %>/*',
							'!<%= yeoman.dist %>/.git*'
						]
					}
				]
			},
			server: '.tmp'
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'<%= yeoman.app %>/scripts/{,*/}*.js'
			]
		},
		// not used since Uglify task does concat,
		// but still available if needed
		/*concat: {
		 dist: {}
		 },*/
		rev: {
			dist: {
				files: {
					src: [
						'<%= yeoman.dist %>/scripts/{,*/}*.js',
						'<%= yeoman.dist %>/styles/{,*/}*.css',
						'<%= yeoman.dist %>/styles/fonts/*'
					]
				}
			}
		},
		useminPrepare: {
			html: '.tmp/index.html',
			options: {
				dest: '<%= yeoman.dist %>'
			}
		},
		usemin: {
			html: ['<%= yeoman.dist %>/{,*/}*.html'],
			css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
			options: {
				dirs: ['<%= yeoman.dist %>']
			}
		},
		imagemin: {
			dist: {
				files: [
					{
						expand: true,
						cwd: '<%= yeoman.app %>/images',
						src: '{,*/}*.{png,jpg,jpeg}',
						dest: '<%= yeoman.dist %>/images'
					}
				]
			}
		},
		svgmin: {
			dist: {
				files: [
					{
						expand: true,
						cwd: '<%= yeoman.app %>/images',
						src: '{,*/}*.svg',
						dest: '<%= yeoman.dist %>/images'
					}
				]
			}
		},
		cssmin: {
			// By default, your `index.html` <!-- Usemin Block --> will take care of
			// minification. This option is pre-configured if you do not wish to use
			// Usemin blocks.
			// dist: {
			//   files: {
			//     '<%= yeoman.dist %>/styles/main.css': [
			//       '.tmp/styles/{,*/}*.css',
			//       '<%= yeoman.app %>/styles/{,*/}*.css'
			//     ]
			//   }
			// }
		},
		htmlmin: {
			dist: {
				options: {
					/*removeCommentsFromCDATA: true,
					 // https://github.com/yeoman/grunt-usemin/issues/44
					 //collapseWhitespace: true,
					 collapseBooleanAttributes: true,
					 removeAttributeQuotes: true,
					 removeRedundantAttributes: true,
					 useShortDoctype: true,
					 removeEmptyAttributes: true,
					 removeOptionalTags: true*/
				},
				files: [
					{
						expand: true,
						cwd: '.tmp',
						src: ['*.html', 'views/*.html'],
						dest: '<%= yeoman.dist %>'
					}
				]
			}
		},
		// Put files not handled in other tasks here
		copy: {
			dist: {
				files: [
					{
						expand: true,
						dot: true,
						cwd: '<%= yeoman.app %>',
						dest: '<%= yeoman.dist %>',
						src: [
							'*.{ico,png,txt}',
							'.htaccess',
							'bower_components/**/*',
							'images/{,*/}*.{jpg,gif,png,webp}',
							'styles/fonts/*'
						]
					}
				]
			},
			styles: {
				expand: true,
				cwd: '<%= yeoman.app %>/styles',
				dest: '.tmp/styles/',
				src: '{,*/}*.css'
			}
		},
		concurrent: {
			server: [
				'jade',
				'copy:styles',
				'compass:dev'
			],
			dist: [
				'copy:styles',
				'svgmin',
				'htmlmin',
				'compass'
			]
		},
		ngmin: {
			dist: {
				files: [
					{
						expand: true,
						cwd: '<%= yeoman.dist %>/scripts',
						src: '*.js',
						dest: '<%= yeoman.dist %>/scripts'
					}
				]
			}
		},
		uglify: {
			dist: {
				files: {
					'<%= yeoman.dist %>/scripts/scripts.js': [
						'<%= yeoman.dist %>/scripts/scripts.js'
					]
				}
			}
		},
		compass: {                  // Task
			dist: {                   // Target
				options: {              // Target options
					sassDir: '<%= yeoman.app %>/styles/sass',
					cssDir: '<%= yeoman.dist %>/css',
					environment: 'production'
				}
			},
			dev: {                    // Another target
				options: {
					sassDir: '<%= yeoman.app %>/styles/sass',
					cssDir: '.tmp/styles'
				}
			}
		},
		jade: {
			dist: {
				options: {
					pretty: true
				},
				files: [
					{
						expand: true,
						cwd: '<%= yeoman.app %>',
						dest: '.tmp',
						src: '{,*/}*.jade',
						ext: '.html'
					}
				]
			}
		}
	});


	grunt.registerTask('server', function (target) {
		if (target === 'dist') {
			return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
		}

		grunt.task.run([
			'clean:server',
			'concurrent:server',
			'autoprefixer',
			'connect:livereload',
			'open',
			'watch'
		]);
	});


	grunt.registerTask('build', [
		'clean:dist',
		'jade',
		'useminPrepare',
		'concurrent:dist',
		'autoprefixer',
		'concat',
		'copy:dist',
		'ngmin',
		'cssmin',
		'uglify',
		'rev',
		'usemin'
	]);

	grunt.registerTask('default', [
		'server'
	]);
};
