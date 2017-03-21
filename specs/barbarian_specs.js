var assert = require('assert');
var barbarian = require('../barbarian');

describe('Barbarian', function(){
  it('should have a name of Maximus!', function(){
    assert.equal("Maximus", barbarian.name);
  });
  it('should have a weapon with a name of greatAxe',
    function(){
      assert.equal("Great Axe", barbarian.weapon.name);
    });
  it('should have an anger level that starts at 0 because he is pretty chilled.', function(){
    assert.equal(0, barbarian.angerLevel);
  });
  it('should have a fav beer called FruitJuice', function(){
    assert.equal("Fruit Juice", barbarian.favouriteBeer);
  });
  it('should have health that starts at 50', function(){
    assert.equal(50, barbarian.health);
  });
  it('taking a drink of favouriteBeer should increase health.', function(){
    barbarian.drink("Fruit Juice");
    assert.equal(60, barbarian.health);
  });
  it('should increase anger if not favouriteBeer', function(){
    barbarian.drink("Extra Strong Beer");
    assert.equal(10, barbarian.angerLevel);
  })
});