attr = Ember.attr
hasMany = Ember.hasMany
belongsTo = Ember.belongsTo

#Flow classes are used to track all policies and quotes
#of a certain insurance type for a specific client
AR.Flow = Ember.Model.extend

  id: attr()
  client: belongsTo "AR.Client", {key: "client_id"}
  insuranceType: belongsTo "AR.Insurancetype", {key: "insurancetype_id"}
  quotes: hasMany "AR.Quote", {key: "quote_ids"}
  policys: hasMany "AR.Policy", {key: "policy_ids"}
  status: attr()
