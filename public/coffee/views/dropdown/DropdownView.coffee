AR.DropdownView = Ember.View.extend

  layoutName: "dropdown/dropdown"
  
  classNames: ["dropdowncontainer"]

  isActive: false

  toggleActive: ->
    @toggleProperty 'isActive'
