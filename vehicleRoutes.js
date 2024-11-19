const express = require('express');
const { fetchVehicles } = require('../controllers/vehicleController');
const router = express.Router();

// Fetch all vehicles
router.get('/', fetchVehicles);

module.exports = router;
