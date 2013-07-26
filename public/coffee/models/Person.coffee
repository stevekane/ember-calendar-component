attr = Ember.attr
hasMany = Ember.hasMany

AR.Person = Ember.Model.extend
  
  id: attr()
  firstName: attr()
  lastName: attr()
  status: attr()
  
  quotes: hasMany "AR.Quote", {key: "quote_ids"}
  policies: hasMany "AR.Policy", {key: "policy_ids"}

  name: (->
    "#{@get('firstName')} #{@get('lastName')}"
  ).property('firstName', 'lastName')

  lastNameFirstLetter: (->
    @get('lastName')[0]
  ).property('lastName')

  type: (->
    switch @get('status')
      when "active" then return "client"
      when "inactive" then return "client"
      else return "lead"
  ).property('status')

  classTag: (->
    "#{@get('type')}tag"
  ).property('type')

AR.Person.adapter = Ember.FixtureAdapter.create()
