module.exports = function (grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        concat: {
            js: {
                src: [
                    'public/js/libs/*.js', // All JS in the libs folder

                ],
                dest: 'public/js/script.js',
            },
            css:
                    {
                        src:[
                       'public/css/*.css',
                       
                        ],
                        dest: 'public/css/style.min.css'
                    }
           
        },
        watch:
                {
                    js:
                            {
                                files: ['public/js/libs/*.js'],
                                tasks: ['uglify'],
                            },
                    css:
                    {
                        files: ['public/css/*.css'],
                        tasks: ['cssmin'],
                    }
                            
             
                },
        uglify: {
            build: {
                src: 'public/js/libs/*.js',
                dest: 'public/js/script-min.js',
            }
        },
        cssmin:
        {
            my_target:
            {
                files:[
            {
                expand:true,
                src:['public/css/*.css'],
                dest:'',
                ext:'.min.css'
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
    grunt.registerTask('default', ['uglify', 'concat', 'watch','cssmin']);

};