#Agent Run web application (ember.js)
This project is the client application for Agentrun.com

#Build
1. Install node.js and npm
2. Install ruby
3. Clone this repo
4. Run npm install
5. Start a grunt process by typing ```grunt```
6. Start the node server by typing ```node index.js```
7. Open a browser and point it at ```localhost:1234```

#Live Reload
This project's gruntfile includes a file watching task that will automatically recompile your handlebars templates, sass files, and coffeescript files
whenever any of the files contained in the directories public/coffee public/handlebars public/sass.

Your browser will automatically refresh itself with the current url whenever you change any of these watched files.

#Styling - how to add the pretties
The handlebars templates are styled by sass files of corrosponding names.  For example, if the template is called "user/outline" then there will be a corrosponding
"sass partial" called user/_outline.sass.  You should be editing these files to add styles to each respective template.
