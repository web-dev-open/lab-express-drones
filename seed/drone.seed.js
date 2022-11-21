// Iteration #1
const mongoose = require("mongoose");

//1. Connect to DB
require("../db");

// 2. Adding Data
const DroneModel = require("../models/Drone.model");

DroneModel.create([
  { name: "drone2", propellers: "4", maxSpeed: "25" },
  { name: "drone5", propellers: "2", maxSpeed: "17" },
  { name: "drone64", propellers: "6", maxSpeed: "22" },
])
  .then(() => {
    console.log("Todos added");
  })
  .catch(() => {
    console.log("Seeding failed");
  })
  //3. Closing
  .finally(() => {
    // 3. Closing the DB connection
    mongoose.connection.close();
    console.log("Connection closed");
  });
