var barbarian = {
  name: "Maximus",
  angerLevel: 0,
  health: 50,
  drink: function(beer){
    beer == this.favouriteBeer ?
      this.health += 10:
      this.angerLevel += 10;
  },
  favouriteBeer: "Fruit Juice",
  weapon: greatAxe = {name: "Great Axe", damage: 10, swing: function(){
    return barbarian.name + " swings his " + this.name + " dealing " + this.damage + " damage";
  }
}
}
module.exports = barbarian;