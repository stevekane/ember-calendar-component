AR.ClientsController = Ember.ArrayController.extend
  
  letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I",
            "J", "K", "L", "M", "N", "O", "P", "Q", "R",
            "S", "T", "U", "V", "W", "U", "X", "Y", "Z"]

  #groups are clients sorted by lastNameFirstLetter for the purpose
  #of displaying in the client list
  groups: (->
    letters = @get "letters"
    clients= @get "content"
    groups = []

    for letter in letters
      groupClients = clients.filterProperty "lastNameFirstLetter", letter
      letterGroup = Ember.Object.create
        letter: letter
        clients: groupClients

      groups.pushObject letterGroup

    groups
  ).property('content.@each')
