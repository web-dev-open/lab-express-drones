const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model');

// require the Drone model here

router.get('/drones', async(req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  try {
    const drones = await Drone.find();
    res.render('drones/list', { drones });
  } catch (error) {
    console.error('Error fetching drones:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form');
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  try {
    const { name, propellers, maxSpeed } = req.body;
    const newDrone = await Drone.create({ name, propellers, maxSpeed });
    res.redirect('/drones');
  } catch (error) {
    console.error('Error creating new drone:', error);
    res.render('drones/create-form', { errorMessage: 'Error creating new drone. Please try again.' });
  }
});

router.get('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  try {
    const drone = await Drone.findById(req.params.id);
    res.render('drones/update-form', { drone });
  } catch (error) {
    console.error('Error fetching drone for update:', error);
    res.status(404).send('Drone not found');
  }
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  try {
    const { name, propellers, maxSpeed } = req.body;
    await Drone.findByIdAndUpdate(req.params.id, { name, propellers, maxSpeed });
    res.redirect('/drones');
  } catch (error) {
    console.error('Error updating drone:', error);
    res.render('drones/update-form', { errorMessage: 'Error updating drone. Please try again.' });
  }
});

router.post('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  try {
    await Drone.findByIdAndDelete(req.params.id);
    res.redirect('/drones');
  } catch (error) {
    console.error('Error deleting drone:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
