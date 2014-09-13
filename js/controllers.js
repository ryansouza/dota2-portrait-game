PortraitGame.PortraitsController = Ember.ArrayController.extend({
  isRevealed: false,
  hero: function() {
    return this.sample();
  }.property(),
  img: function() {
    return this.get('hero.img');
  }.property('hero'),
  sample: function() {
    var i = Math.floor(Math.random() * this.get('model.length'));
    return this.objectAt(i);
  },
  actions: {
    // Reveal the name of the displayed hero
    reveal: function() {
      if (this.isRevealed ) return;

      this.set('name', this.get('hero.name'));
      this.set('isRevealed', true);
    },
    // Display a new random hero
    next_hero: function() {
      if (! this.isRevealed ) return;

      this.set('isRevealed', false);
      this.set('hero', this.sample());
    }
  }
});
