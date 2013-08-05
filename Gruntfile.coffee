'use strict'

module.exports = (grunt) ->
  
  grunt.initConfig
    #js files
    jsDir: "public/javascripts"
    srcJS: "app.js"

    #handlebars files
    hbDir: "public/handlebars"
    hbCompiled: "apptemplates.js"

    #sass files
    sassDir: "public/sass"
    mainSassFile: "app.sass"
    sassCompiled: "appsass.css"

    #output files
    distDir: "public/dist"

    minispade:
      options:
        renameRequire: true
        useStrict: false
        prefixToRemove: '<%= jsDir %>'+'/'
      files:
        src: ['<%= jsDir %>/**/*.js']
        dest: '<%= distDir %>/<%= srcJS %>'

    sass:
      dist:
        options:
          trace: true
          style: 'expanded'
        files:
          '<%= distDir %>/<%= sassCompiled %>': '<%= sassDir %>/<%= mainSassFile %>'

    emberTemplates:
      compile:
        options:
          templateName: (sourceFile) ->
            #TODO: THIS IS HARDCODED...SHOULD CHANGE TO REF GLOBAL
            return sourceFile.replace("public/handlebars/", "")
        files:
          "<%= distDir%>/<%= hbCompiled %>": "<%= hbDir %>/**/*.handlebars"
    
    watch:
      js:
        files: ['<%= jsDir%>/**/*.js']
        tasks: ['minispade']
        options:
          livereload: true

      sass:
        files: ['<%= sassDir %>/**/*.sass']
        tasks: ['sass']
        options:
          livereload: true

      handlebars:
        files: ['<%= hbDir%>/**/*.handlebars']
        tasks: ['emberTemplates']
        options:
          livereload: true

      indexhtml:
        files: ['index.html']
        tasks: []
        options:
          livereload: true

  grunt.loadNpmTasks('grunt-minispade')
  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-ember-templates')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.registerTask('default',
    [
      'minispade',
      'emberTemplates',
      'sass',
      'watch'
    ]
  )
