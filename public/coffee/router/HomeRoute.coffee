require "views/home/ActivityItemView.js"

AR.HomeRoute = Ember.Route.extend

  #these events will trigger transitions to modal form routes
  events:
    addPerson: () ->
      @transitionTo "home.addperson"
    addQuote: () ->
      @transitionTo "home.addquote"

  setupController: ->
    flowsCon = @controllerFor("home").get 'controllers.flows'
    flowsCon.set "content", AR.Flow.find()

  renderTemplate: ->
    @render "home", {
      into: "application"
      outlet: "main"
      controller: "home"
    }
