require "utils/Computed.js"

sortByProperty = AR.ComputedUtils.sortByProperty

AR.ClientsController = Ember.ArrayController.extend
  
  letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I",
            "J", "K", "L", "M", "N", "O", "P", "Q", "R",
            "S", "T", "U", "V", "W", "U", "X", "Y", "Z"]

  #our clientlist sorted by lastName
  sortedByLastName: (->
    content = @get "content"

    Ember.ArrayProxy.createWithMixins Ember.SortableMixin,
      content: content
      sortProperties: ['lastName']
      sortAscending: true
  ).property('content.@each')

  #groups are clients sorted by lastNameFirstLetter for the purpose
  #of displaying in the client list
  groups: (->
    letters = @get "letters"
    clients = @get "sortedByLastName"
    groups = []

    #push each group of clients (sorted by lastNameFirstLetter) onto groups
    for letter in letters
      groupClients = clients.filterProperty "lastNameFirstLetter", letter
      letterGroup = Ember.Object.create
        letter: letter
        clients: groupClients

      groups.pushObject letterGroup

    groups
  ).property('sortedByLastName.@each')
