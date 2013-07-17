require "views/home/ActivityItemView.js"

AR.HomeIndexRoute = Ember.Route.extend

  #these events will trigger transitions to modal form routes
  events:
    addPerson: () ->
      @transitionTo "home.addperson"
    addQuote: () ->
      @transitionTo "home.addquote"

  setupController: ->
    clientsCon = @controllerFor('home').get 'controllers.clients'
    quotesCon = @controllerFor('home').get 'controllers.quotes'
    policysCon = @controllerFor('home').get 'controllers.policys'
    clientsCon.set "content", AR.Client.find()
    quotesCon.set "content", AR.Quote.find()
    policysCon.set "content", AR.Policy.find()

  renderTemplate: ->
    @render "home/index", {
      into: "application"
      outlet: "main"
      controller: "home"
    }
