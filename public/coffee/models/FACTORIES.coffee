require "utils/FactoryHelpers.js"

randFromList = AR.FactoryHelpers.selectRandomFromList
randMethod = AR.FactoryHelpers.randomMethod

AR.QuoteFactory = Ember.Object.create
  states: ['illinois', 'california', 'new york']
  types: [1,2,3,4]
  
  spawn: (quantity, clientIds) ->
    quotes = []
    for num in [0..quantity-1]
      effectiveDay = Math.floor(Math.random() * 90)
      expirationDay = Math.floor(Math.random() * 365) + 90
      updateDay = Math.floor(Math.random() * 5)
      quotes.push {
        id: num
        state: randFromList @states
        client_id: randFromList clientIds
        insurancetype_id: randFromList @types
        notes: "best insurance ever"
        premium: "$100,000 / s"
        effectiveDate: moment().add('days', effectiveDay).toDate()
        expirationDate: moment().add('days', expirationDay).toDate()
        createdAt: moment().toDate()
        updatedAt: moment().subtract('days', updateDay).toDate()
      }
    quotes

AR.PolicyFactory = Ember.Object.create
  states: ['illinois', 'california', 'new york']
  types: [1,2,3,4]
  
  spawn: (quantity, clientIds) ->
    policies = []
    for num in [0..quantity-1]
      effectiveDay = Math.floor(Math.random() * 90)
      expirationDay = Math.floor(Math.random() * 365) + 90
      updateDay = Math.floor(Math.random() * 5)
      policies.push {
        id: num
        state: randFromList @states
        client_id: randFromList clientIds
        insurancetype_id: randFromList @types
        effectiveDate: moment().add('days', effectiveDay).toDate()
        expirationDate: moment().add('days', expirationDay).toDate()
        createdAt: moment().toDate()
        updatedAt: moment().subtract('days', updateDay).toDate()
      }
    policies

AR.ReminderFactory = Ember.Object.create
  notes: [
    "Call to remind them of serious chance of death",
    "Tell them how much money they can save",
    "Bring donuts to office",
    "Employ so-called 'tactics'",
    "Discuss weird insurance dream over cocktails"
  ]
  
  spawn: (quantity, clientIds) ->
    reminders = []
    for num in [0..quantity-1]
      targetDayOffset = Math.floor(Math.random() * 2)
      targetHourOffset = Math.floor(Math.random() * 7)
      date = moment()
      #inject randomMethod onto date object
      date.randMethod = randMethod
      add = date.add
      sub = date.subtract

      reminders.push {
        id: num
        targetDateTime: date
          .randMethod(add, sub, 'days', targetDayOffset)
          .randMethod(add, sub, 'hours', targetHourOffset)
          .toDate()
        notes: randFromList @notes
        checked: false
        client_id: randFromList clientIds
      }
    reminders
