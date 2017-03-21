var assert = require('assert');
var barbarian = require('../barbarian');
var pm = require('../plasma_canon');

describe('Plasma Canon', function () {
  it('should have a name of plasma canon 2000!', function () {
    assert.equal("Plasmah Canon 2000", pm.name);
  });
});