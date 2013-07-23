require "utils/Enumerables.js"

AR.ClientsController = Ember.ArrayController.extend
  
  letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I",
            "J", "K", "L", "M", "N", "O", "P", "Q", "R",
            "S", "T", "U", "V", "W", "U", "X", "Y", "Z"]

  sortedByLastName: (->
    clients = @get "content"
    sorted = Ember.ArrayProxy.createWithMixins Ember.SortableMixin,
      content: clients
      sortProperties: ['lastName']
      sortAscending: true

    #here we attach a flag to certain clients to indicate they are
    #the first of their name group.  IE.  the first client with a 
    #lastName that ends in "R" would get a flag "isFirst"
    sorted.forEach( (client, index, clients) ->
      #check if we are first letter
      if index is 0
        client.set "isFirst", true
        return
      else
        prev = clients.objectAt(index-1)
        prevLetter = prev.get 'lastNameFirstLetter'
        clientLetter = client.get 'lastNameFirstLetter'
        #if we don't match, this is the first of a new "letter group"
        if clientLetter isnt prevLetter then client.set "isFirst", true
    )

    sorted
  ).property('content.@each')
