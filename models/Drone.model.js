// Iteration #1
const{Schema, model}= require("mongoose")

const DroneSchema = new Schema(
    {
     name:String,
     propellers:Number,
     maxSpeed:Number
    }
)

const Drone = new model('drone',DroneSchema);


module.exports = Drone;