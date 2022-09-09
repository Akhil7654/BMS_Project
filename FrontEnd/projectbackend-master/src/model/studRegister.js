const Mongoose = require ("mongoose")


const registers = Mongoose.model("registers",Mongoose.Schema({
    name : String,
    registerMumber : Number,
    address : String,
    department : String,
    semester :Number,
    boardingPoint : String,
    password : String,
    confirmPassword : String
}))

module.exports = {registers}