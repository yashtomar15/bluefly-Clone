const mongoose=require("mongoose")


const connect=mongoose.connect("mongodb+srv://App123:App123@cluster0.56dvjei.mongodb.net/Bluefly?retryWrites=true&w=majority")


module.exports=connect;



//connect to database 
// mongosh/ mongo "mongodb+srv://App123:App123@cluster0.56dvjei.mongodb.net/Bluefly?retryWrites=true&w=majority"

//and show dbs
//use Bluefly
//and then select collections