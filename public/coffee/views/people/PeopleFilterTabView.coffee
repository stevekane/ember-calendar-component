alias = Ember.computed.alias

AR.PeopleFilterTabView = Ember.View.extend

  tagName: "nav"
  classNameBindings: ['activeclientfilter', 'tabClass', 'tabName']

  activeclientfilter: alias "tab.active"
  tabClass: 'clientlistfilter'
  tabName: alias "tab.name"

  click: (event) ->
    controller = @get "controller"
    tab = @get "tab"
    controller.setActiveTab tab
