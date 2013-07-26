attr = Ember.attr
belongsTo = Ember.belongsTo
hasMany = Ember.hasMany

AR.Reminder = Ember.Model.extend

  id: attr()
  targetDateTime: attr(Date)
  notes: attr()
  checked: attr()
  person: belongsTo "AR.Person", {key: "person_id"}
  
AR.Reminder.adapter = Ember.FixtureAdapter.create()
