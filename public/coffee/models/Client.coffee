attr = Ember.attr
hasMany = Ember.hasMany

AR.Client = Ember.Model.extend
  
  id: attr()
  name: attr()
  state: attr()
  
  #clientcontacts: hasMany "AR.Clientcontact", {key: "clientcontact_ids"}
  #documents: hasMany "AR.Document", {key: "document_ids"}
  #quotes: hasMany "AR.Quote", {key: "quote_ids"}
  #policies: hasMany "AR.Policy", {key: "policy_ids"}

  #TODO:
  #this is a style class used for displaying this item
  #this probably belongs on an item view...
  tagClass: (->
    @get('state') + 'tag'
  ).property('state')

AR.Client.adapter = Ember.FixtureAdapter.create()

AR.Client.FIXTURES = [
  {id: 1, name: 'Sally', state: 'lead'},
  {id: 2, name: 'Jesse', state: 'active'},
  {id: 3, name: 'Molly', state: 'lead'},
  {id: 4, name: 'Jenny', state: 'active'},
  {id: 5, name: 'Thomas', state: 'inactive'}
]
