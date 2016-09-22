module.exports = function (grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        concat: {
            dist: {
                src: [
                    'public/js/libs/*.js', // All JS in the libs folder

                ],
                dest: 'public/js/script.js',
            }
        },
        watch:
                {
                    js:
                            {
                                files: ['public/js/libs/*.js'],
                                tasks: ['uglify'],
                            }
                },
        uglify: {
            build: {
                src: 'public/js/libs/*.js',
                dest: 'public/js/script-min.js',
            }
        },
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    // 4. Where we tell Grunt what to do when we type 'grunt' into the terminal.
    grunt.registerTask('default', ['uglify', 'concat', 'watch']);

};