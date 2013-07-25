require "utils/Enumerables.js"
require "utils/Alias.js"

sortByProperties = AR.AliasUtils.sortByProperties
inArray = AR.EnumberableUtils.inArray

AR.ClientsController = Ember.ArrayController.extend
  
  letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I",
            "J", "K", "L", "M", "N", "O", "P", "Q", "R",
            "S", "T", "U", "V", "W", "U", "X", "Y", "Z"]

  allTab: Ember.Object.create name: 'ALL', active: true
  leadsTab: Ember.Object.create name: 'LEADS', active: false
  clientsTab: Ember.Object.create name: 'CLIENTS', active: false

  #set the initial activeTab
  init: ->
    @_super()
    @set "activeTab", @get('allTab')

  setActiveTab: (tab) ->
    allTab = @get "allTab"
    leadsTab = @get "leadsTab"
    clientsTab = @get "clientsTab"
    allTab.set "active", false
    leadsTab.set "active", false
    clientsTab.set "active", false
    tab.set "active", true
    @set "activeTab", tab

  #coerce our tab names into array of active filters
  activeFilters: (->
    activeTabName = @get "activeTab.name"
    switch activeTabName
      when "ALL" then return ['lead', 'client']
      when "LEADS" then return ['lead']
      when "CLIENTS" then return ['client']
  ).property('activeTab')

  sortedFilteredClients: (->
    clients = @get "content"
    activeFilters = @get 'activeFilters'

    filtered = clients.filter inArray(activeFilters, "type")
    sortedFiltered = sortByProperties filtered, ['lastName'], true
    sortedFiltered
  ).property(
    'content.@each',
    'activeFilters'
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
