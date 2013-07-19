AR.EnumberableUtils = Ember.Object.create

  inArray: (list, property) ->
    (element) ->
      prop = element.get property
      position = list.indexOf prop
      position > -1
