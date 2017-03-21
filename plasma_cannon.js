var plasma_cannon = {
  name: "Plasmah Cannon 2000",
  damage: 100,
  charge: 0,
  chargeWeapon: function () {
    this.charge += 10;
    return "plasma cannon is charging.";
  },
  action: function () {
    if (this.charge >= 10) {
      return " fires his " + this.name + " dealing " + this.damage + " damage";
    } else {
      return "'s " + this.name + " is insufficiently charged.";
    }
  }
};

module.exports = plasma_cannon;