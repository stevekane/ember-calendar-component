'use strict'

module.exports = (grunt) ->
  
  grunt.initConfig
    #coffee files and outputted JS
    coffeeDir: "public/coffee"
    compiledJS: "public/compiled-js"
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

    clean:
      src: ['<%= compiledJS %>']

    coffee:
      options:
        bare: true
      glob_to_multiple:
        expand: true
        cwd: '<%= coffeeDir %>'
        src: ['**/*.coffee']
        dest: '<%= compiledJS %>'
        ext: '.js'

    minispade:
      options:
        renameRequire: true
        useStrict: false
        prefixToRemove: '<%= compiledJS %>'+'/'
      files:
        src: ['<%= compiledJS %>/**/*.js']
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
      sass:
        files: ['<%= sassDir %>/**/*.sass']
        tasks: ['sass']
        options:
          livereload: true

      coffee:
        files: ['<%= coffeeDir %>/**/*.coffee']
        tasks: ['clean', 'coffee', 'minispade']
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

  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-minispade')
  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-ember-templates')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-coffee')

  grunt.registerTask('default',
    [
      'clean',
      'coffee',
      'minispade',
      'emberTemplates',
      'sass',
      'watch'
    ]
  )
