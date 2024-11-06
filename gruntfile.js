module.exports = function(grunt) {
     //Project configuration
     grunt.initConfig ({
          pkg: grunt.file.readJSON('package.json'),

          //sass config
          sass: {
               dist: {
                    options: {
                         style: 'compressed'
                    },
                    files:{
                         'css/style.css': 'sass/style.scss'
                    }
               }
          }

     })

     grunt.loadNpmTasks('grunt-contrib-sass');
     grunt.registerTask('default', ['sass']);

}