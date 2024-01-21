// Iteration #1

const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

const drones = [
    {name: "Creeper XL 500", propellers: 3, maxSpeed: 12},
    {name: "Racer 57", propellers: 4, maxSpeed: 20},
    {name: "Courier 3000i", propellers: 6, maxSpeed: 18}
];

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

Drone.create(drones)
  .then((createdDrones) => {
    console.log(`${createdDrones.length} drones have been created.`);
  })
  .catch((error) => {
    console.error('Error seeding database:', error);
  })
  .finally(() => {
    mongoose.disconnect();
  });