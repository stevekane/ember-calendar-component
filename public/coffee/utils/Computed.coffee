AR.ComputedUtils = Ember.Object.create
  
  #returns a computed property that is a sorted version of an array
  sortByProperty: (array, sortProperties, sortAscending) ->
    depKey = array + ".@each"

    Ember.computed depKey, ->
      Ember.ArrayProxy.createWithMixins Ember.SortableMixin,
        content: content
        sortProperties: sortProperties
        sortAscending: sortAscending
