var barbarian = {
  name: "Maximus",
  angerLevel: 0,
  health: 50,
  drink: function(beer){
    if(beer == this.favouriteBeer){
      this.health += 10;

    }
    return "yum";
  },
  favouriteBeer: "Fruit Juice",
  weapon: greatAxe = {name: "Great Axe", damage: 10
}
}
module.exports = barbarian;