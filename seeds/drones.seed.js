// Iteration #1
// seeds/drones.seeds.js
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

mongoose.connect('mongodb://localhost:27017/your-database-name', { useNewUrlParser: true, useUnifiedTopology: true });

const dronesData = [
  { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 },
];

Drone.create(dronesData)
  .then((result) => console.log(`${result.length} drones created.`))
  .catch((error) => console.error(error))
  .finally(() => mongoose.connection.close());

