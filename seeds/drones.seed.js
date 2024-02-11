// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

const dronesData = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

mongoose.connect('mongodb://localhost:27017/lab-express-drones', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  return Drone.create(dronesData);
})
.then(drones => {
  console.log(`${drones.length} drones have been successfully created.`);
})
.catch(error => {
  console.error('Error seeding the database:', error);
})
.finally(() => {
  mongoose.disconnect();
});
