require "utils/Enumerables.js"

inArray = AR.EnumberableUtils.inArray

#this is a suppport class to keep this mess out of the controller
AR.FilterManager = Ember.Object.extend
  clientFilterSummary: "View All People"
  typeFilterSummary: "View All Types"
  statusFilterSummary: "Status"

  clientFilters: [
    Ember.Object.create(filter: "active", checked: true),
    Ember.Object.create(filter: "inactive", checked: true),
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

  activeClientFilters: (->
    @get('clientFilters').filterProperty('checked').getEach "filter"
  ).property('clientFilters.@each.checked')

  activeTypeFilters: (->
    @get('typeFilters').filterProperty('checked').getEach "filter"
  ).property('typeFilters.@each.checked')

  activeStatusFilters: (->
    @get('statusFilters').filterProperty('checked').getEach "filter"
  ).property('statusFilters.@each.checked')

AR.HomeController = Ember.Controller.extend
  needs: ['flows', 'clients', 'reminders', 'insurancetypes']

  filterManager: AR.FilterManager.create()

  insuranceTypes: Ember.computed.alias "controllers.insurancetypes.content.@each.name"

  #return a list of filtered clients for display
  filteredFlows: (->
    flows = @get 'controllers.flows.content'
    clientFilters = @get "filterManager.activeClientFilters"
    typeFilters = @get "filterManager.activeTypeFilters"
    statusFilters = @get "filterManager.activeStatusFilters"

    #filter by each filtertype to obtain reduced set of active flows
    filtered = flows.filter(inArray(clientFilters, "client.status"))
      .filter(inArray(typeFilters, "insuranceType.name"))
      .filter(inArray(statusFilters, "status"))

    filtered
  ).property(
    'controllers.flows.content.@each',
    'controllers.flows.content.@each.client',
    'filterManager.activeClientFilters.@each',
    'filterManager.activeTypeFilters.@each',
    'filterManager.activeStatusFilters.@each'
  )

  activeDay: moment()

  previousDay: ->
    activeDay = @get("activeDay").clone()
    previousDay = activeDay.subtract('days', 1)
    @set "activeDay", previousDay

  nextDay: ->
    activeDay = @get("activeDay").clone()
    nextDay = activeDay.add('days', 1)
    @set "activeDay", nextDay

  filteredReminders: (->
    reminders = @get "controllers.reminders"
    filteredRems = reminders
  ).property(
    'controllers.reminders.content.@each',
  )
