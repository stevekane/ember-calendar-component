alias = Ember.computed.alias

AR.AddreminderController = Ember.Controller.extend

  needs: ['reminders', 'insurancetypes', 'persons']

  reminders: alias "controllers.reminders.content"
  insuranceTypes: alias "controllers.insurancetypes.content"
  people: alias "controllers.persons.content"

  hours: [1,2,3,4,5,6,7,8,9,10,11,12]
  minutes: ["00", "15", "30", "45"]
  amPm: ["AM", "PM"]

  activeDay: moment()

  previousDay: ->
    activeDay = @get("activeDay").clone()
    previousDay = activeDay.subtract('days', 1)
    @set "activeDay", previousDay

  nextDay: ->
    activeDay = @get("activeDay").clone()
    nextDay = activeDay.add('days', 1)
    @set "activeDay", nextDay
