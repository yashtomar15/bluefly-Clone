const mongoose=require("mongoose")


const connect=mongoose.connect("mongodb+srv://App123:App123@cluster0.56dvjei.mongodb.net/Bluefly?retryWrites=true&w=majority");

// userschema for store signup data
const userSchema=mongoose.Schema({
    firstName:{type:String,require:true},
    lastName:String,
    email:String,
    password:String
})

// user model
const User=mongoose.model('user',userSchema);

module.exports={connect,User};