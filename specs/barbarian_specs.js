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
  

});