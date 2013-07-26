require "controllers/ApplicationController.js"

AR.ApplicationRoute = Ember.Route.extend
  #goBack actions trigger the back button's functionality
  events:
    goHome: ->
      this.transitionTo "home"
    goPeople: ->
      this.transitionTo "people"
    goBack: ->
      window.history.back()
    logout: ->
      alert "you have attempted to log out!"

  setupController: (controller) ->
    personsCon = controller.get "controllers.persons"
    personsCon.set "content", AR.Person.find()
    quotesCon = controller.get "controllers.quotes"
    quotesCon.set "content", AR.Quote.find()
    policysCon = controller.get "controllers.policys"
    policysCon.set "content", AR.Policy.find()
    insurancetypesCon = controller.get "controllers.insurancetypes"
    insurancetypesCon.set "content", AR.Insurancetype.find()
    flowsCon = controller.get 'controllers.flows'
    flowsCon.set "content", AR.Flow.find()
    remindersCon = controller.get 'controllers.reminders'
    remindersCon.set "content", AR.Reminder.find()
