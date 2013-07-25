AR.AliasUtils = Ember.Object.create

  sortByProperties: (array, sortProperties, sortAscending) ->
    Ember.ArrayProxy.createWithMixins Ember.SortableMixin,
      content: array
      sortProperties: sortProperties
      sortAscending: sortAscending
