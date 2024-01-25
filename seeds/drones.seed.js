
// Iteration #1
require ('../db')


const mongoose = require('mongoose');
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