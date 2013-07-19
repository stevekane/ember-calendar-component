attr = Ember.attr
belongsTo = Ember.belongsTo
hasMany = Ember.hasMany

AR.Reminder = Ember.Model.extend

  id: attr()
  targetDateTime: attr(Date)
  notes: attr()
  checked: attr()
  client: belongsTo "AR.Client", {key: "client_id"}
  
AR.Reminder.adapter = Ember.FixtureAdapter.create()
