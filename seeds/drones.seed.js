// Iteration #1
require('../db');


const mongoose = require('mongoose');
const droneModel = require('../models/Drone.model');

// Updated drone data
const dronesData = [
  { name: "Phantom X3", propellers: 4, maxSpeed: 15 },
  
  { name: "SkyRunner 2000", propellers: 6, maxSpeed: 22 },
  
  { name: "Stealth Ninja", propellers: 8, maxSpeed: 25 }
];

droneModel.create(dronesData)
  .then((result) => {
    console.log('Success!');
  })
  .catch((err) => {
    console.log('Failed!', err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
