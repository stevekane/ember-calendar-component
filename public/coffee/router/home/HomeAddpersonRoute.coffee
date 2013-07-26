require "views/home/AddpersonmodalView.js"

AR.HomeAddpersonRoute = Ember.Route.extend
  events:
    close: ->
      @transitionTo "home"

  renderTemplate: () ->
    @render("home/addpersonmodal", {
      outlet: "modal"
    })
