const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model')

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
  .then(dataFromDb=>{

    res.render('drones/list.hbs',{drone:dataFromDb})
  })
  .catch(err=>next(err))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const {name, propellers,maxSpeed} = req.body;

   Drone.create({name,propellers, maxSpeed})
   .then(()=>res.redirect('/drones'))
   .catch(err=>next(err))

});
router.get('/drones/:id/edit', (req, res, next) => {
  const { id } = req.params;


  Drone.findById(id)       
    .then(droneToUpdate => {


      res.render('drones/update-form.hbs',{drone:droneToUpdate})

    })
    .catch(err => next(err));
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const id = req.params
  const {name,propellers,maxSpeed} = req.body;
  
  Drone.create(id,{name,propellers,maxSpeed},{new:true})
  .then(()=>res.redirect('/drones'))
  .catch(err=>next(err))
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here

  const {id} = req.params;
  Drone.findByIdAndDelete(id)
  .then(()=>res.redirect('/drones'))
  .catch(err=>next(err))
});

module.exports = router;
