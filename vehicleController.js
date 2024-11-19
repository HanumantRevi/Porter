const { getVehicles } = require('../models/vehicleModel');

const fetchVehicles = (req, res) => {
  res.json(getVehicles());
};

module.exports = { fetchVehicles };
