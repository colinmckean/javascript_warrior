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
  it('should not fire the plasma cannon when not charged', function(){
    assert.equal("'s Plasmah Cannon 2000 is insufficiently charged.", pm.action());
  });
  it('should fire when it has sufficient charge.', function(){
  assert.equal("plasma cannon is charging.", pm.chargeWeapon());
  assert.equal(" fires his Plasmah Cannon 2000 dealing 100 damage", pm.action());
  });
});