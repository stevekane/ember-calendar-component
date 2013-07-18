chooseRand = (list) ->
  list[Math.round((Math.random() * (list.length-1)))]

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
        state: chooseRand @states
        client_id: chooseRand clientIds
        insurancetype_id: chooseRand @types
        notes: "best insurance ever"
        premium: "$100,000 / s"
        effectiveDate: moment().add('days', effectiveDay)
        expirationDate: moment().add('days', expirationDay)
        createdAt: moment()
        updatedAt: moment().subtract('days', updateDay)
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
        state: chooseRand @states
        client_id: chooseRand clientIds
        insurancetype_id: chooseRand @types
        effectiveDate: moment().add('days', effectiveDay)
        expirationDate: moment().add('days', expirationDay)
        createdAt: moment()
        updatedAt: moment().subtract('days', updateDay)
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
      reminders.push {
        id: num
        targetDateTime: moment().add('days', targetDayOffset)
        notes: chooseRand @notes
        checked: false
        client_id: chooseRand clientIds
      }
    reminders
