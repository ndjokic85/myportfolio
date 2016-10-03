module.exports = function (grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        concat: {
            js: {
                src: [
                    'public/js/libs/*.js','public/js/libs/**/*.js', // All JS in the libs folder

                ],
                dest: 'public/js/dest/script.js',
            },
            css:
                    {
                        src: [
                            'public/css/src/*.css',
                            'public/css/src/**/*.css'

                        ],
                        dest: 'public/css/dest/styles.css'
                    }

        },
        watch:
                {
                    css:
                            {
                                files: ['public/css/src/**/*.css', 'public/css/src/*.css'],
                                tasks: ['concat'],
                            },
                    js:
                            {
                                files: ['public/js/libs/*.js','public/js/libs/**/*.js'],
                                tasks: ['concat','uglify'],
                            },
                    mincss:
                            {
                                files: ['public/css/dest/styles.css'],
                                tasks: ['cssmin'],
                            }




                },
        uglify: {
            build: {
                src: 'public/js/dest/script.js',
                dest: 'public/js/dest/script-min.js',
            }
        },
        cssmin:
                {
                    my_target:
                            {
                                files: [
                                    {
                                        expand: true,
                                        src: ['public/css/dest/styles.css'],
                                        dest: '',
                                        ext: '.min.css'
                                    }
                                ]
                            }
                }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');


    // 4. Where we tell Grunt what to do when we type 'grunt' into the terminal.
    grunt.registerTask('default', ['uglify', 'concat', 'watch', 'cssmin']);

};