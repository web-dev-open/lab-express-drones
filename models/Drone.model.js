// Iteration #1
//create a model to then seed
const mongoose = require("mongoose");

const { Schema, model } = require("mongoose");

const droneSchema = new Schema({
  name: String,
  propellers: Number,
  maxSpeed: Number,
});

const Drone = model("Drone", droneSchema);

module.exports = Drone;
