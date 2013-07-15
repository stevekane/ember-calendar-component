AR.HomeController = Ember.Controller.extend
  needs: ['clients']
  
  #filterproperties
  _statuses: ['lead', 'active', 'inactive']
  _statusFilter: 'lead'

  #return a list of filtered clients for display
  filteredClients: (->
    clients = @get 'controllers.clients.content'
    status = @get '_statusFilter'

    clients.filterProperty "status", status
  ).property('controllers.clients.content.@each', '_statusFilter')
