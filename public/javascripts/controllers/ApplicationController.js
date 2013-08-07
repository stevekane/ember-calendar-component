App.ApplicationController = Ember.Controller.extend({
  initialDate: moment().add('month', 2),
  targetDate: null
});
