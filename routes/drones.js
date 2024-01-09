const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model');

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const drones = await Drone.find();
    res.render('drones/list.hbs', { drones });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form.hbs');
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    await Drone.create(req.body);
    res.redirect('/drones');
  } catch (error) {
    console.error(error);
    res.render('drones/create-form.hbs', { error: 'Failed to create drone. Please try again.' });
  }
});

router.get('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    const drone = await Drone.findById(req.params.id);
    res.render('drones/update-form.hbs', { drone });
  } catch (error) {
    console.error(error);
    res.redirect('/404'); // or render an error page
  }
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    await Drone.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/drones');
  } catch (error) {
    console.error(error);
    res.render('drones/update-form.hbs', { drone: req.body, error: 'Failed to update drone. Please try again.' });
  }
});

router.post('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  try {
    await Drone.findByIdAndDelete(req.params.id);
    res.redirect('/drones');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
