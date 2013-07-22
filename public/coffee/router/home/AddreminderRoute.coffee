require "views/home/AddremindermodalView.js"

AR.HomeAddreminderRoute = Ember.Route.extend
  events:
    close: ->
      @transitionTo "home"

  renderTemplate: ->
    @render("home/addremindermodal", {
      outlet: "modal"
    })
