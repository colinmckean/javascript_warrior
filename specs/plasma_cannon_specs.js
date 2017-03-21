var assert = require('assert');
var barbarian = require('../barbarian');
var pm = require('../plasma_cannon');

describe('Plasma Canon', function () {
  it('should have a name of plasma cannon 2000!', function () {
    assert.equal("Plasmah Cannon 2000", pm.name);
  });
});