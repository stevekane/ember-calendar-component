require "views/AddpersonmodalView.js"

AR.HomeAddpersonRoute = Ember.Route.extend
  events:
    close: ->
      @transitionTo "home"

  renderTemplate: () ->
    @render(
      "addpersonmodal",
      into: "home",
      outlet: "modal",
    )
