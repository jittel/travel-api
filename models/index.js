const Traveller = require("./Traveller")
const Trip = require("./Trip")
const Location = require("./Location")

Traveller.hasMany(Trip);
Trip.belongsTo(Traveller);

Trip.hasMany(Location);
Location.belongsTo(Trip);

module.exports = {
    Traveller:Traveller,
    Trip:Trip,
    Location:Location
}