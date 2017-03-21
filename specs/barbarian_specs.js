var assert = require('assert');
var barbarian = require('../barbarian');

describe('Barbarian', function(){
  it('should have a name of Maximus!', function(){
    assert.equal("Maximus", barbarian.name);
  });
});