// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

mongoose.connect('mongodb://localhost:27017/drones', { useNewUrlParser: true, useUnifiedTopology: true });

Drone.create(drones)
  .then(createdDrones => console.log(`${createdDrones.length} drones have been created`))
  .catch(error => console.error(error))
  .finally(() => mongoose.connection.close());