const express = require('express');
const router = express.Router();
const Drones=require('../models/Drone.model')
// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drones.find().then(allDrones =>{
    res.render('drones/list.hbs' , {drones :allDrones})
  }).catch(err => {
    console.log("an error occured while finding")
  })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const { name , propellers, maxSpeed } = req.body;

  Drones.create({ name,propellers,maxSpeed })
    .then(() => res.redirect('/drones'))
    .catch(error => next(error));
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const droneId=req.params.id
  Drones.findOne({_id : droneId}).then((droneToUpdate)=> { res.render('drones/update-form.hbs' , {drone:droneToUpdate}) }).catch(err => console.log('error occured'))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { name , propellers, maxSpeed } = req.body;
  const droneId=req.params.id

  Drones.updateOne({_id:droneId},{ name,propellers,maxSpeed })
    .then(() => res.redirect('/drones'))
    .catch(error => next(error));
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const Id=req.params.id
  Drones.deleteOne({_id:Id}).then(()=> res.redirect('/drones')).catch(err => next(err))
});

module.exports = router;
