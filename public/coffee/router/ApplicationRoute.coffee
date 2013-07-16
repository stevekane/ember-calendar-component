require "controllers/ApplicationController.js"

AR.ApplicationRoute = Ember.Route.extend
  #goBack actions trigger the back button's functionality
  events:
    goHome: () ->
      this.transitionTo "home"
    goClients: () ->
      this.transitionTo "clients"
    goBack: () ->
      window.history.back()
    logout: () ->
      alert "you have attempted to log out!"
