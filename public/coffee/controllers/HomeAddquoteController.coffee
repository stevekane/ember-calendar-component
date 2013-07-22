alias = Ember.computed.alias

AR.HomeAddquoteController = Ember.Controller.extend
  
  needs: ['insurancetypes']
  
  insuranceTypes: alias "controllers.insurancetypes.content.@each.name"
