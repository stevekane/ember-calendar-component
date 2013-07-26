require "views/home/ActivityItemView.js"

AR.HomeRoute = Ember.Route.extend

  #these events will trigger transitions to modal form routes
  events:
    addPerson: () ->
      @transitionTo "home.addperson"
    addQuote: () ->
      @transitionTo "home.addquote"
    addReminder: () ->
      @transitionTo "home.addreminder"

  renderTemplate: ->
    @render "home", {
      into: "application"
      outlet: "main"
      controller: "home"
    }
