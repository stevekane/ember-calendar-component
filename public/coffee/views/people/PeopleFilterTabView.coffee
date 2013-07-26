alias = Ember.computed.alias

AR.PeopleFilterTabView = Ember.View.extend

  tagName: "nav"
  classNameBindings: ['activepersonfilter', 'tabClass', 'tabName']

  activepersonfilter: alias "tab.active"
  tabClass: 'peoplelistfilter'
  tabName: alias "tab.name"

  click: (event) ->
    controller = @get "controller"
    tab = @get "tab"
    controller.setActiveTab tab
