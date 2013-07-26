alias = Ember.computed.alias

AR.AddquoteController = Ember.Controller.extend

  needs: ['insurancetypes', 'persons']
  
  clients: alias "controllers.clients.content"
  insuranceTypes: alias "controllers.insurancetypes.content"
