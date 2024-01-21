const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model');

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then(allTheDrones => {
      res.render('drones/list.hbs', { drones: allTheDrones });
    })
    .catch(error => {
      console.log('Error while getting the drones from the DB: ', error);
      next(error);
    });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form.hbs');
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body;

  Drone.create({ name, propellers, maxSpeed })
    .then(() => res.redirect('/drones'))
    .catch(error => {
      console.log('Error creating new drone:', error);
      res.render('drones/create-form.hbs', { error: 'Error creating drone. Please try again.' });
    });
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const droneId = req.params.id;

  Drone.findById(droneId)
    .then(droneToEdit => {
      res.render('drones/update-form.hbs', { drone: droneToEdit });
    })
    .catch(error => next(error));
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const droneId = req.params.id; 
  const { name, propellers, maxSpeed } = req.body;

  Drone.findByIdAndUpdate(droneId, { name, propellers, maxSpeed }, { new: true })
    .then(() => res.redirect(`/drones/`)) 
    .catch(error => next(error));
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const droneId = req.params.id; 

  Drone.findByIdAndDelete(droneId)
    .then(() => res.redirect('/drones'))
    .catch(error => next(error));
});

module.exports = router;
