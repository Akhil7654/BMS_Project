const Mongoose = require ("mongoose")
const schema = Mongoose.Schema;
Mongoose.connect("mongodb+srv://Immanuel:immanuel@cluster0.rnux5pm.mongodb.net/CollegeBusDB?retryWrites=true&w=majority")
const registerSchema = new schema({
    name : {type: String,required :true},
    registerNumber : {type: Number,required :true},
    address : {type: String,required :true},
    department : {type: String,required :true},
    semester :{type: Number,required :true},
    email :{type:String,required :true},
    boardingPoint : {type: String,required :true},
    password : {type: String,required :true},
    confirmPassword : {type: String,required :true},
    amount : {type:Number},
    status : {type:String}
})
var register = Mongoose.model("registers",registerSchema);
module.exports = {register}