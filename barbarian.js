var barbarian = {
  name: "Maximus",
  angerLevel: 0,
  health: 50,
  drink: function (beer) {
    beer === this.favouriteBeer ? this.health += 10 : this.angerLevel += 10;
  },
  favouriteBeer: "Fruit Juice",
  equip: function (weapon) {
    this.weapon = weapon;
  },
  attack: function () {
    return this.name + this.weapon.action();
  },
  backstory: "Maximus would spend his days writing backstories for barbarians, until.... one day he found that there was fracture in the space time continuum. Barbarians from other dimentions appeared through this breach, they would claim to be named Maximus however they would have their own backstory putting Maximus out of business. From this day he vowed to eliminate these shallow copies with his plasma cannon.",
  weapon: { name: "Great Axe", damage: 10, action: function () {
    return " swings"  + " his " + this.name + " dealing " + this.damage + " damage";
  }
          }
};
module.exports = barbarian;