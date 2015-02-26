module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.registerTask('build', ['browserify','uglify']);
    grunt.registerTask('build', ['browserify']);
    grunt.registerTask('default', ['build', 'concurrent:default']);
    grunt.registerTask('serve', ['connect:server']);
    return grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 80200,
                    keepalive: true,
                    livereload: true,
                    base: ['public']
                }
            }
        },
        watch: {
            js: {
                files: ['app/**/*.js'],
                tasks: ['build']
            },
            options: {
                spawn: true,
                livereload: true
            }         ,
            css:{
                files:['app/css/*.css'],
                tasks:['cssmin']
            }
        },
        concurrent: {
            default: ['serve', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        },
        clean: {
            build: [(grunt.option('dir') || 'build')]
        },
        browserify: {
            dist: {
                files: {
                    'public/js/bundle.js': ['app/**/*.js']
                },
                options: {}
            }
        },
        cssmin: {
            target: {
                files: {
                    'public/css/index.css':  ['app/css/*.css']
                }
            }
        } ,
        uglify: {
            bundle: {
                files: {
                    'public/js/bundle.min.js': ['public/js/bundle.js']
                }
            }
        }


    });
}