AR.FactoryHelpers = Ember.Object.create

  randomMethod: (method1, method2) ->
    args = Array.prototype.slice.call(arguments, 2)
    if Math.random() > .5 then method1.apply(this, args)
    else method2.apply(this, args)
    return this

  selectRandomFromList: (list) ->
    list[Math.round((Math.random() * (list.length-1)))]
