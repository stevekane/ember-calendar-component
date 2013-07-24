AR.ClientsRoute = Ember.Route.extend
  
  renderTemplate: (controller) ->
    @render "clients", {controller: controller}
