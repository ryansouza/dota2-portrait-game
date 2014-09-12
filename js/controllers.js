PortraitGame.PortraitsController = Ember.ArrayController.extend({
  picked: null,
  revealed: false,
  hero: function() {
    return this.sample();
  }.property(),
  sample: function() {
    var i = Math.floor(Math.random() * this.get('model.length'));
    return this.objectAt(i);
  },
  actions: {
    // Reveal the name of the displayed hero
    reveal: function() {
      this.set('revealed', true);
    },
    // Display a new random hero
    next_hero: function() {
      this.set('revealed', false);
      this.set('hero', this.sample());
    }
  }
});
