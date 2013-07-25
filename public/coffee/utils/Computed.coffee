AR.ComputedUtils = Ember.Object.create
  
  #returns a computed property that is a sorted version of an array
  sortByProperty: (arrayName, sortProperties, sortAscending) ->
    depKey = arrayName + ".@each"
    
    Ember.computed depKey, ->
      content = @get arrayName
      Ember.ArrayProxy.createWithMixins Ember.SortableMixin,
        content: content
        sortProperties: sortProperties
        sortAscending: sortAscending
