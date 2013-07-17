AR.DropdownView = Ember.View.extend

  layoutName: "dropdown/dropdown"
  
  classNames: ["dropdowncontainer"]

  isActive: true

  toggleActive: ->
    @toggleProperty 'isActive'
