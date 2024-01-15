const express = require('express');
const router = express.Router();

// Require the Drone model here
const Drone = require('../models/drone'); // Replace '../models/drone' with the correct path to your Drone model file

// Iteration #2: List the drones
router.get('/drones', async (req, res, next) => {
  try {
    const drones = await Drone.find(); // Assuming you have a method to fetch all drones from your model
    res.render('drones/index', { drones }); // Replace 'drones/index' with the correct path to your drones listing view
  } catch (error) {
    next(error);
  }
});

// Iteration #3: Add a new drone (render the form)
router.get('/drones/create', (req, res, next) => {
  res.render('drones/create'); // Replace 'drones/create' with the correct path to your create drone form view
});

// Iteration #3: Add a new drone (process the form submission)
router.post('/drones/create', async (req, res, next) => {
  try {
    const { name, propellers, maxSpeed } = req.body;
    const newDrone = new Drone({ name, propellers, maxSpeed });
    await newDrone.save(); // Assuming you have a method to save a new drone in your model
    res.redirect('/drones');
  } catch (error) {
    next(error);
  }
});

// Iteration #4: Update the drone (render the edit form)
router.get('/drones/:id/edit', async (req, res, next) => {
  try {
    const drone = await Drone.findById(req.params.id); // Assuming you have a method to find a drone by ID in your model
    res.render('drones/edit', { drone }); // Replace 'drones/edit' with the correct path to your edit drone form view
  } catch (error) {
    next(error);
  }
});

// Iteration #4: Update the drone (process the form submission)
router.post('/drones/:id/edit', async (req, res, next) => {
  try {
    const { name, propellers, maxSpeed } = req.body;
    await Drone.findByIdAndUpdate(req.params.id, { name, propellers, maxSpeed }); // Assuming you have a method to update a drone by ID in your model
    res.redirect('/drones');
  } catch (error) {
    next(error);
  }
});

// Iteration #5: Delete the drone
router.post('/drones/:id/delete', async (req, res, next) => {
  try {
    await Drone.findByIdAndRemove(req.params.id); // Assuming you have a method to remove a drone by ID in your model
    res.redirect('/drones');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
