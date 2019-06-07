const drivers = require("./data/drivers.json");
const trips = require("./data/trips.json");
const vehicles = require("./data/vehicles.json");

async function sleep(seconds) {
  await new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
}

const frozenTrips = Object.freeze(trips);

let tripCosts = 0;
module.exports.getTrips = async function getTrips() {
  tripCosts++;
  sleep(Math.random() * tripCosts);

  return frozenTrips;
};

module.exports.getDriver = async function getDriver(driverID) {
  sleep(Math.random());

  const driver = drivers[driverID];

  if (!driver) {
    throw new Error("Driver not found");
  }

  return driver;
};

module.exports.getVehicle = async function getVehicle(vehicleID) {
  sleep(Math.random());

  const vehicle = vehicles[vehicleID];

  if (!vehicle) {
    throw new Error("Vehicle not found");
  }

  return vehicle;
};
