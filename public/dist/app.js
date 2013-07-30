minispade.register('Application.js', function() {
window.Stylecore = Ember.Application.create();
minispade.require("Router.js");

});

minispade.register('Router.js', function() {
Stylecore.Router.map(function() {
  return this.resource("components", function() {
    return this.resource("component");
  });
});

});
