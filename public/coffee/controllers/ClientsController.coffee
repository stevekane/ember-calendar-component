require "utils/Enumerables.js"
require "utils/Alias.js"

sortByProperties = AR.AliasUtils.sortByProperties
inArray = AR.EnumberableUtils.inArray

AR.ClientsController = Ember.ArrayController.extend
  
  letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I",
            "J", "K", "L", "M", "N", "O", "P", "Q", "R",
            "S", "T", "U", "V", "W", "U", "X", "Y", "Z"]

  clientFilters: [
    Ember.Object.create(filter: "client", active: true),
    Ember.Object.create(filter: "lead", active: true),
  ]

  #ACTION HANDLERS
  _resetFilters: -> @get('clientFilters').setEach "active", true

  showAll: -> @_resetFilters()

  showLeads: ->
    @_resetFilters()
    @get('clientFilters').findProperty("filter", "client").set "active", false

  showClients: ->
    @_resetFilters()
    @get('clientFilters').findProperty("filter", "lead").set "active", false

  sortedFilteredClients: (->
    clients = @get "content"
    activeFilters = @get('clientFilters')
      .filterProperty('active')
      .getEach("filter")
    filtered = clients.filter inArray(activeFilters, "type")
    sortedFiltered = sortByProperties filtered, ['lastName'], true
    sortedFiltered
  ).property(
    'content.@each',
    'clientFilters.@each.active'
  )

  #groups are clients sorted by lastNameFirstLetter for the purpose
  #of displaying in the client list
  groups: (->
    letters = @get "letters"
    clients = @get "sortedFilteredClients"
    groups = []

    #push each group of clients (sorted by lastNameFirstLetter) onto groups
    for letter in letters
      groupClients = clients.filterProperty "lastNameFirstLetter", letter
      letterGroup = Ember.Object.create
        letter: letter
        clients: groupClients

      groups.pushObject letterGroup

    groups
  ).property('sortedFilteredClients.@each')
