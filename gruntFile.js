module.exports = function(grunt){

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('serve', ['shell']);
    grunt.registerTask('build', ['browserify', 'watch']);
 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            main: {
                src: 'scripts/bundle.js',
                dest: 'scripts/main.js'
            }
        },
        watch: {
            files: [
                'css/*.*',
                'scripts/*.*',
            ],
            tasks: ['build']
        },
        shell: {
            runserver:{
                command: 'node scripts/index.js --force'
            }
        }     
    });

};