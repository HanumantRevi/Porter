// Mock database for bookings
const bookings = [];

const getBookings = () => bookings;

const createBooking = (booking) => {
  booking.id = bookings.length + 1;
  bookings.push(booking);
  return booking;
};

module.exports = { getBookings, createBooking };
