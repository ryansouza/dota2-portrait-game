PortraitGame.Router.map(function() {
  this.resource('portraits', { path: '/' });
});

PortraitGame.PortraitsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('portrait');
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    controller.send('next_hero');
  }
});
