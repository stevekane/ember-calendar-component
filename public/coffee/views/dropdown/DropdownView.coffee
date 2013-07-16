AR.DropdownView = Ember.View.extend

  templateName: "dropdown/dropdown"

  isActive: false

  toggleActive: ->
    @toggleProperty 'isActive'
