attr = Ember.attr
hasMany = Ember.hasMany

AR.Client = Ember.Model.extend
  
  id: attr()
  name: attr()
  status: attr()
  
  #clientcontacts: hasMany "AR.Clientcontact", {key: "clientcontact_ids"}
  #documents: hasMany "AR.Document", {key: "document_ids"}
  quotes: hasMany "AR.Quote", {key: "quote_ids"}
  policies: hasMany "AR.Policy", {key: "policy_ids"}

AR.Client.adapter = Ember.FixtureAdapter.create()
