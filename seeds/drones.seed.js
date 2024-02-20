// Iteration #1

const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-drones";


mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
})
.then(() => {
  console.log('Connected to MongoDB.');




const drones = [
    { name: 'General Atomics MQ-9 Reaper', propellers: 4, maxSpeed: 18 },
    { name: 'DJI Phantom 4 Pro', propellers: 4, maxSpeed: 20 },
    { name: 'Parrot Anafi', propellers: 4, maxSpeed: 14 },
    { name: 'DJI Mavic Air 2', propellers: 4, maxSpeed: 19 },
    { name: 'Skydio 2', propellers: 6, maxSpeed: 18 },
    { name: 'Autel Robotics EVO', propellers: 4, maxSpeed: 20 },
    { name: 'Yuneec Typhoon H Pro', propellers: 6, maxSpeed: 13 },
    { name: 'PowerVision PowerEgg X', propellers: 4, maxSpeed: 16 },
    { name: 'Hubsan Zino Pro', propellers: 4, maxSpeed: 20 },
    { name: 'Holy Stone HS100', propellers: 4, maxSpeed: 10 },
    { name: 'Walkera Vitus', propellers: 4, maxSpeed: 16 },
    { name: 'Potensic D85', propellers: 4, maxSpeed: 18 },
    { name: 'JJRC X12', propellers: 4, maxSpeed: 20 },
    { name: 'Ryze Tello', propellers: 4, maxSpeed: 8 },
    { name: 'Altair Aerial Outlaw SE', propellers: 4, maxSpeed: 24 },
    { name: 'Contixo F22', propellers: 4, maxSpeed: 19 },
    { name: 'Force1 F100 Ghost', propellers: 4, maxSpeed: 25 },
    { name: 'Eachine E520', propellers: 4, maxSpeed: 18 },
    { name: 'MJX Bugs 2W', propellers: 4, maxSpeed: 25 },
    { name: 'Syma X5C', propellers: 4, maxSpeed: 7 },
    { name: 'Cheerwing Syma X5SW-V3', propellers: 4, maxSpeed: 7 },
    { name: 'UDI U818A HD', propellers: 4, maxSpeed: 10 },
    { name: 'Holy Stone HS200', propellers: 4, maxSpeed: 10 },
    { name: 'Helifar H816', propellers: 4, maxSpeed: 15 },
    { name: 'Drocon Bugs 3', propellers: 4, maxSpeed: 48 }
  ];
  
  
  // Create drones in the database
  Drone.create(drones)
    .then(createdDrones => {
      console.log(`${createdDrones.length} drones have been created.`);
    })
    .catch(error => {
      console.error('Error creating drones:', error);
    })
    .finally(() => {
      // Close the connection after seeding
      mongoose.disconnect();
    });
})
.catch(error => {
  console.error('MongoDB connection error:', error);
});