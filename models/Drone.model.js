// Iteration #1
const mongoose=require('mongoose')

const schema= {
    name:String,
    propellers:Number,
    maxSpeed:Number
}

const drone=mongoose.model('drone' ,schema)

module.exports = drone