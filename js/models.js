PortraitGame.Portrait = DS.Model.extend({
  name: DS.attr('string'),
  img: DS.attr('string')
});

PortraitGame.Portrait.FIXTURES = [
  {
    id: 1,
    name: "AntiMage",
    img: "http://cdn.dota2.com/apps/dota2/images/heroes/antimage_full.png"
  },
  {
    id: 105,
    name: "Techies",
    img: "http://cdn.dota2.com/apps/dota2/images/heroes/techies_full.png"
  }
]
