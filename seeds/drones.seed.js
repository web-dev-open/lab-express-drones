// Iteration #1

// Connect to the database, the code sits inside db/index.js
require ('../db')


const mongoose = require('mongoose');

// Adding the data
const droneModel = require ('../models/Drone.model')

const dronesData = [

    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
    
    ];

droneModel.create(dronesData)
.then((result) => {
    console.log('Success!')
}).catch((err) => {
    console.log('Failed!',err)   
})
.finally(() => {
    mongoose.connection.close();
});


//use this once and use node seed/drones.seed.js