require "utils/Enumerables.js"

inArray = AR.EnumberableUtils.inArray
alias = Ember.computed.alias

#this is a suppport class to keep this mess out of the controller
AR.FilterManager = Ember.Object.extend
  personFilterSummary: "View All People"
  typeFilterSummary: "View All Types"
  statusFilterSummary: "Status"

  personFilters: [
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

  activePersonFilters: (->
    @get('personFilters').filterProperty('checked').getEach "filter"
  ).property('personFilters.@each.checked')

  activeTypeFilters: (->
    @get('typeFilters').filterProperty('checked').getEach "filter"
  ).property('typeFilters.@each.checked')

  activeStatusFilters: (->
    @get('statusFilters').filterProperty('checked').getEach "filter"
  ).property('statusFilters.@each.checked')

AR.HomeController = Ember.Controller.extend
  needs: ['flows', 'persons', 'reminders', 'insurancetypes']

  filterManager: AR.FilterManager.create()

  insuranceTypes: alias "controllers.insurancetypes.content.@each"
  flows: alias "controllers.flows.content.@each"
  persons: alias "controllers.persons.content.@each"
  reminders: alias "controllers.reminders.content.@each"

  #return a list of filtered people for display
  filteredFlows: (->
    flows = @get 'controllers.flows.content'
    personFilters = @get "filterManager.activePersonFilters"
    typeFilters = @get "filterManager.activeTypeFilters"
    statusFilters = @get "filterManager.activeStatusFilters"

    #filter by each filtertype to obtain reduced set of active flows
    filtered = flows
      .filter(inArray(personFilters, "person.status"))
      .filter(inArray(typeFilters, "insuranceType.name"))
      .filter(inArray(statusFilters, "status"))

    filtered
  ).property(
    'flows.@each'
    'persons.@each'
    'filterManager.activePersonFilters.@each',
    'filterManager.activeTypeFilters.@each',
    'filterManager.activeStatusFilters.@each'
  )

  sortedFilteredReminders: (->
    reminders = @get "controllers.reminders"
    activeDay = @get "activeDay"

    #filter by the current day
    filteredRems = reminders.filter((rem) ->
      targetDateTime = moment(rem.get 'targetDateTime')
      targetDateTime.isSame activeDay, 'day'
    )

    #sort by targetDateTime
    sortedRems = Ember.ArrayProxy.createWithMixins Ember.SortableMixin,
      content: filteredRems
      sortProperties: ['targetDateTime']
      sortAscending: true

    sortedRems
  ).property(
    'reminders',
    'activeDay'
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
