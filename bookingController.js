const { getBookings, createBooking } = require('../models/bookingModel');

const fetchBookings = (req, res) => {
  res.json(getBookings());
};

const addBooking = (req, res) => {
  const { pickup, drop, vehicleType } = req.body;

  if (!pickup || !drop || !vehicleType) {
    return res.status(400).json({ message: 'All fields are required!' });
  }

  const newBooking = createBooking({ pickup, drop, vehicleType });
  res.status(201).json(newBooking);
};

module.exports = { fetchBookings, addBooking };
