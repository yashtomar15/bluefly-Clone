const mongoose = require("mongoose");

const connect = mongoose.connect(
  'mongodb+srv://yashtomar15:incorrect_password@cluster0.zolsoeq.mongodb.net/bluefly?retryWrites=true&w=majority'
);

// userschema for store signup data
const userSchema = mongoose.Schema({
  firstName: { type: String, require: true },
  lastName: String,
  email: { type: String, unique: true },
  password: String,
});

// user model
const User = mongoose.model("user", userSchema);

module.exports = { connect, User };

//connect to database
// mongosh/ mongo "mongodb+srv://App123:App123@cluster0.56dvjei.mongodb.net/Bluefly?retryWrites=true&w=majority"

//and show dbs
//use Bluefly
//and then select collections
