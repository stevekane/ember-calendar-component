alias = Ember.computed.alias

AR.HomeAddquoteController = Ember.Controller.extend
  
  needs: ['insurancetypes', 'clients']
  
  clients: alias "controllers.clients.content"
  insuranceTypes: alias "controllers.insurancetypes.content"
