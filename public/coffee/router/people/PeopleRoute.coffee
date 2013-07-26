AR.PeopleRoute = Ember.Route.extend

  #modal form route
  events:
    addPerson: ->
      @transitionTo "people.addperson"
