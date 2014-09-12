PortraitGame.Router.map(function() {
  this.resource('portraits', { path: '/' });
});

PortraitGame.PortraitsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('portrait');
  },
});
