alias = Ember.computed.alias

AR.HomeAddreminderController = Ember.Controller.extend
  
  needs: ['reminders', 'insurancetypes', 'clients']

  reminders: alias "controllers.reminders.content"
  insuranceTypes: alias "controllers.insurancetypes.content"
  clients: alias "controllers.clients.content"
