#Overview
This project is a baseline for starting a new ember.js-based web application.

#Grunt
Grunt is a build-tool/task runner that runs in node.js.  Asset compilation, transpiling, compiling, concatenation, etc are all handled by grunt.  A "file watching" utility is included in Grunt which will take care of performing the necessary operations when a file has changed to propagate the effects of said changes up to the browser.  

#Node Server
The node.js application that ships with this project is an extremely thin express server.  Its singular purpose is to serve our static assets to us during development.
