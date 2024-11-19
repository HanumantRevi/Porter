const express = require('express');
const { fetchBookings, addBooking } = require('../controllers/bookingController');
const router = express.Router();

// Fetch all bookings
router.get('/', fetchBookings);

// Add a new booking
router.post('/', addBooking);

module.exports = router;
