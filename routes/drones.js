const express = require('express');
const router = express.Router();

// require the Drone model here

router.get('/drones', async (_req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  try {
    const drones = await Drone.find();
    res.render('drones/list', { drones });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/drones/create', (_req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form');

});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const { name, propellers, maxSpeed } = req.body;

  try {
    const newDrone = await Drone.create({ name, propellers, maxSpeed });
    res.redirect('/drones');
  } catch (error) {
    console.error(error);
    res.render('drones/create-form', { error: 'Failed to create a new drone. Please try again.' });
  }
});

router.get('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params;

  try {
    const droneToUpdate = await Drone.findById(id);
    res.render('drones/update-form.hbs', { drone: droneToUpdate });
  } catch (error) {
    console.error('Error fetching drone for update:', error);
    res.status(404).send('Not Found');
  }
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;

  try {
    await Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed });
    res.redirect('/drones');
  } catch (error) {
    console.error('Error updating the drone:', error);
    const droneToUpdate = { _id: id, name, propellers, maxSpeed };
    res.render('drones/update-form.hbs', { drone: droneToUpdate, error: 'Failed to update the drone.' });
  }
});

router.post('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const { id } = req.params;

  try {
    await Drone.findByIdAndDelete(id);
    res.redirect('/drones');
  } catch (error) {
    console.error('Error deleting the drone:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
