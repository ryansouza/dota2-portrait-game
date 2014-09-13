PortraitGame.PortraitsController = Ember.ArrayController.extend({
  isRevealed: false,

  heroIds: function() {
    var count = this.get('length');
    var ids = [];
    for (var i = 0; i < count; i++) ids.push(i);
    return Ember.A(ids);
  }.property(),

  idPool: Ember.A([]),

  hero: function() {
    return this.sample();
  }.property(),

  img: function() {
    return this.get('hero.img');
  }.property('hero'),


  sample: function() {
    var pool = this.get('idPool');

    if (pool.length <= this.get('length') * 2) {
      while(pool.length <= this.get('length') * 2) {
        pool.pushObjects(this.get('heroIds'));
      }

      // shuffle the pool w/ http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
      for (var i = pool.length - 1; i > 0; i--) {
        var j = Math.floor((Math.random() * i));
        var swap = pool.objectAt(i);
        pool.replace(i, 1, pool.objectAt(j));
        pool.replace(j, 1, swap);
      }
    }

    return this.objectAt(pool.shiftObject());
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
