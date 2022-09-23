// Connect to your DB
require('../db')
const mongoose = require('mongoose')

// Add data
let DroneModel = require('../models/Drone.model')
DroneModel.create([
    {name: 'DroneX', propellers: 3, maxSpeed: 23},
    {name: 'DroneBig', propellers: 7, maxSpeed: 30},
    {name: 'DroneSmall', propellers: 1, maxSpeed: 15}
])
    .then(() => {
        console.log('Data added')
        mongoose.connection.close();
    })
    .catch(() => {
        console.log('Error while adding data')
    })

