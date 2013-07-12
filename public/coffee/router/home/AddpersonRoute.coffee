require "views/AddpersonmodalView.js"

AR.HomeAddpersonRoute = Ember.Route.extend
  renderTemplate: () ->
    @render(
      "addpersonmodal",
      into: "home",
      outlet: "modal",
    )
