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


});