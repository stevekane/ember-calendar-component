AR.HomeRoute = Ember.Route.extend

  #these events will trigger transitions to modal form routes
  events:
    addPerson: () ->
      @transitionTo "home.addperson"
    addQuote: () ->
      @transitionTo "home.addquote"

  setupController: (controller) ->
    clientsCon = controller.get 'controllers.clients'
    clientsCon.set "content", AR.Client.find()
  
