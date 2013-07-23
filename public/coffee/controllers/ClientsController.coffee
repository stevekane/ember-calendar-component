require "utils/Enumerables.js"

inArray = AR.EnumberableUtils.inArray
valueInList = AR.EnumberableUtils.valueInList
alias = Ember.computed.alias

AR.ClientsFilterManager = Ember.Object.extend
  clientFilters: [
    Ember.Object.create(filter: "leads", active: true),
    Ember.Object.create(filter: "clients", active: true),
  ]
  letterFilters: [
    Ember.Object.create(filter: "A", active: "true")
    Ember.Object.create(filter: "B", active: "true")
    Ember.Object.create(filter: "C", active: "true")
    Ember.Object.create(filter: "D", active: "true")
    Ember.Object.create(filter: "E", active: "true")
    Ember.Object.create(filter: "F", active: "true")
    Ember.Object.create(filter: "G", active: "true")
    Ember.Object.create(filter: "H", active: "true")
    Ember.Object.create(filter: "I", active: "true")
    Ember.Object.create(filter: "J", active: "true")
    Ember.Object.create(filter: "K", active: "true")
    Ember.Object.create(filter: "L", active: "true")
    Ember.Object.create(filter: "M", active: "true")
    Ember.Object.create(filter: "N", active: "true")
    Ember.Object.create(filter: "O", active: "true")
    Ember.Object.create(filter: "P", active: "true")
    Ember.Object.create(filter: "Q", active: "true")
    Ember.Object.create(filter: "R", active: "true")
    Ember.Object.create(filter: "S", active: "true")
    Ember.Object.create(filter: "T", active: "true")
    Ember.Object.create(filter: "U", active: "true")
    Ember.Object.create(filter: "V", active: "true")
    Ember.Object.create(filter: "W", active: "true")
    Ember.Object.create(filter: "X", active: "true")
    Ember.Object.create(filter: "Y", active: "true")
    Ember.Object.create(filter: "Z", active: "true")
  ]

AR.ClientsController = Ember.ArrayController.extend

  filterManager: AR.ClientsFilterManager.create()

  letters: alias "filterManager.letterFilters"

  activeLetterFilters: (->
    @get('letters').filterProperty "active"
  ).property("letters.@each.active")

  changeActiveLetter: (letter) ->
    letters = @get "letters"
    letters.setEach "active", false
    letter.set "active", true

  makeAllLettersActive: ->
    @get('letters').setEach "active", true

  filteredClients: (->
    activeLetterFilters = @get "activeLetterFilters"
    activeLetters = activeLetterFilters.mapProperty "filter"
    clients = @get "content"

    filtered = clients
      .filter( (client) ->
        #is first letter of lastName 
        firstLetter = client.get('lastName')[0]
        valueInList activeLetters, firstLetter
      )

    filtered
  ).property(
    'activeLetterFilters'
    'content.@each'
  )
