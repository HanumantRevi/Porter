// Mock database for vehicles
const vehicles = [
    { id: 1, type: 'Bike', capacity: '20kg' },
    { id: 2, type: 'Mini Truck', capacity: '500kg' },
    { id: 3, type: 'Van', capacity: '1 ton' },
  ];
  
  const getVehicles = () => vehicles;
  
  module.exports = { getVehicles };
  