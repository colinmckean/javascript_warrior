var assert = require('assert');
var barbarian = require('../barbarian');
var pm = require('../plasma_cannon');

describe('Plasma Canon', function () {
  beforeEach(function() {
    pm.charge = 0;
  });
  it('should have a name of plasma cannon 2000!', function () {
    assert.equal("Plasmah Cannon 2000", pm.name);
  });
  it('should have a charge level of 0 to start with', function (){
    assert.equal(0, pm.charge);
  });
});