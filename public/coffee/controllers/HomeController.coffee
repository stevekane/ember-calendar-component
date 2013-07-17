#this is a suppport class to keep this mess out of the controller
AR.FilterManager = Ember.Object.extend
  clientFilterSummary: "View All People"
  typeFilterSummary: "View All Types"
  statusFilterSummary: "Status"

  clientFilters: [
    Ember.Object.create(filter: "client", checked: true),
    Ember.Object.create(filter: "lead", checked: true),
  ]
  typeFilters: [
    Ember.Object.create(filter: "TERM LIFE", checked: true),
    Ember.Object.create(filter: "PERSONAL AUTO", checked: true),
    Ember.Object.create(filter: "RENTERS", checked: true),
  ]
  statusFilters: [
    Ember.Object.create(filter: "Quote started", checked: true),
    Ember.Object.create(filter: "Quote uploaded", checked: true),
    Ember.Object.create(filter: "Quote sent to client", checked: true),
    Ember.Object.create(filter: "Quote approved", checked: true),
    Ember.Object.create(filter: "Policy uploaded", checked: true),
    Ember.Object.create(filter: "Policy sent to client", checked: true),
    Ember.Object.create(filter: "Policy approved", checked: true),
  ]

AR.HomeController = Ember.Controller.extend
  needs: ['clients']

  filterManager: AR.FilterManager.create()
  
  #filterproperties
  _statuses: ['lead', 'active', 'inactive']
  _statusFilter: 'lead'

  #return a list of filtered clients for display
  filteredClients: (->
    clients = @get 'controllers.clients.content'
    clients
  ).property('controllers.clients.content.@each')

  filterObserva: (->
    filters = @get("filterManager.statusFilters").getEach "checked"
    console.log filters
  ).observes(
    'filterManager.clientFilters.@each.checked'
    'filterManager.typeFilters.@each.checked'
    'filterManager.statusFilters.@each.checked'
  )
