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
  weapon: { name: "Great Axe", damage: 10, action: function () {
    return " swings"  + " his " + this.name + " dealing " + this.damage + " damage";
  }
          }
};
module.exports = barbarian;