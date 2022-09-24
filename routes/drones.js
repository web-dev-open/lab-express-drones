const express = require('express');
const router = express.Router();

let DroneModel = require('../models/Drone.model')
// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  DroneModel.find()
  .then((drone) => {
    res.render('list.hbs', {drone})
    console.log(response)
  })
  .catch((err) => {
    console.log('Some error in finding', err)
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
  console.log(req.body)
  DroneModel.create(req.body)
  .then(() => {
    
    res.redirect('/drones') // redirects to a URL
  })
  .catch((err) => {
    res.render('drones/create-form.hbs')
    console.log('Some error in finding', err)
  })
});


router.get('/drones/:id', (req, res, next) => {
  
 
  // Find the todo from the DB with that specific ID
  let {id} = req.params
  DroneModel.findById(id)
      .then((drone) => {
        res.render('drones/descriptions.hbs', {drone})
      })
      .catch((err) => {
        console.log('Some error in finding', err)
      })
});

router.get('/drones/:id/edit', (req, res, next) => {
 
  let {id} = req.params
  DroneModel.findById(id)
      .then((drone) => {
        res.render('drones/update-form.hbs', {drone})
      })
      .catch((err) => {
        console.log('Some error in finding', err)
      })
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res) => {
  let {id} = req.params
  DroneModel.findByIdAndUpdate(id, req.body)
      .then(() => {
        res.redirect(`drones/${id}`)
      })
      .catch((err) => {
        console.log('Some error in finding', err)
      })
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  let {id} = req.params
  console.log(req.body)
  DroneModel.findByIdAndDelete(id)
    .then(() => {
      res.redirect(`/drones`) // redirects to HOME PAG
    })
    .catch((err) => {
      console.log('Some error in finding', err)
    })
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
