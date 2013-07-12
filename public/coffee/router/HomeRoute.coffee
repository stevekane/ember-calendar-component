AR.HomeRoute = Ember.Route.extend
  setupController: (controller) ->
    clientsCon = controller.get 'controllers.clients'
    clientsCon.set "content", AR.Client.find()
