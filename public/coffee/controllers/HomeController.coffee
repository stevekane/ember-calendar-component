AR.HomeController = Ember.Controller.extend
  needs: ['clients']
  
  #filterproperties
  _statuses: ['lead', 'active', 'inactive']
  _statusFilter: 'lead'

  #return a list of filtered clients for display
  filteredClients: (->
    clients = @get 'controllers.clients.content'
    status = @get '_statusFilter'

    clients.filterProperty "state", status
  ).property('controllers.clients.content.@each', '_statusFilter')

  #response to user click on add new person button
  addPerson: () ->
    alert "you attempted to add a person"

  #response to user click on add new quote button
  addQuote: () ->
    alert "you attempted to add a quote"
