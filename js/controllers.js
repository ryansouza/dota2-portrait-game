PortraitGame.PortraitsController = Ember.ObjectController.extend({
  picked: null,
  revealed: false,
  actions: {
    // Reveal the name of the displayed hero
    reveal: function() {
      this.set('revealed', true);
    },

    // Display a new random hero
    next_hero: function() {
      var i = Math.floor(Math.random() * this.get('model').content.length);
      this.set('picked', this.get('model').objectAt(i));
      this.set('revealed', false);
    }
  }
});
