attr = Ember.attr

AR.Insurancetype = Ember.Model.extend
  
  id: attr()
  name: attr()

AR.Insurancetype.adapter = Ember.FixtureAdapter.create()
