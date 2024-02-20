
const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model');

// require the Drone model here


router.get('/drones',(req, res, next) => {
  // Iteration #2: List the drones

  Drone.find()
  .then(allTheDronesFromDB => {
    // Render the list view and pass the drones data
    console.log("Retrieved Drones from Database:",allTheDronesFromDB);
    res.render('drones/list', { drones:allTheDronesFromDB});
  })
  .catch(error => {
    
    console.error('Error retrieving drones:', error);
    
    next(error);
  });


  

// ... your code here
});

router.get('drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form');
 

  // ... your code here
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name,propellers,maxSpeed } = req.body; 

  // Create a new drone instance
  const newDrone = new Drone({
    name,
    propellers,
    maxSpeed
  });

  
  newDrone.save()
    .then(() => {
     
      res.redirect('/drones');
    })
    .catch(error => {
      console.error('Error creating drone:', error);
      
      res.render('drones/create-form', { errorMessage: 'Failed to create drone. Please try again.' });
    });



  // ... your code here
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const droneId = req.params.id;
  // Find the drone by id
  Drone.findById(droneId)
    .then(drone => {
      if (!drone) {
        res.status(404).render('not-found'); 
      } else {
        res.render('drones/update-form', { drone }); 
      }
    })
    .catch(error => {
      console.error('Error updating drone:', error);
      next(error);
    });



  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  router.post('/drones/:id/edit', (req, res, next) => {
    const droneId = req.params.id;
    const { name, propellers, maxSpeed } = req.body;
  
    // Find the drone by id and update it
    Drone.findByIdAndUpdate(droneId, { name, propellers, maxSpeed }, { new: true })
      .then(updatedDrone => {
        if (!updatedDrone) {
          res.status(404).render('not-found'); 
        } else {
          res.redirect('/drones');
        }
      })
      .catch(error => {
        console.error('Error updating drone:', error);
        res.render('drones/update-form', { errorMessage: 'Failed to update drone. Please try again.', drone: req.body });
      });
  });




  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const droneId = req.params.id;

  
  Drone.findByIdAndDelete(droneId)
    .then(() => {
     
      res.redirect('/drones');
    })
    .catch(error => {
      console.error('Error deleting drone:', error);
     
      res.render('error'); 
    });


  // ... your code here
});

module.exports = router;
