attr = Ember.attr
hasMany = Ember.hasMany

AR.Client = Ember.Model.extend
  
  id: attr()
  firstName: attr()
  lastName: attr()
  status: attr()
  
  #clientcontacts: hasMany "AR.Clientcontact", {key: "clientcontact_ids"}
  #documents: hasMany "AR.Document", {key: "document_ids"}
  quotes: hasMany "AR.Quote", {key: "quote_ids"}
  policies: hasMany "AR.Policy", {key: "policy_ids"}

  name: (->
    "#{@get('firstName')} #{@get('lastName')}"
  ).property('firstName', 'lastName')

AR.Client.adapter = Ember.FixtureAdapter.create()
