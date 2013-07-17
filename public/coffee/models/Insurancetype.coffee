attr = Ember.attr

AR.Insurancetype = Ember.Model.extend
  
  id: attr()
  name: attr()

AR.Insurancetype.adapter = Ember.FixtureAdapter.create()

AR.Quote.FIXTURES = [
  {id: 1, name: "RENTERS"},
  {id: 2, name: "PERSONAL AUTO"},
  {id: 3, name: "TERM LIFE"},
  {id: 4, name: "RABBIT INVASION"},
]
