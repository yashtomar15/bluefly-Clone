<<<<<<< HEAD
const express = require("express");
const App = express();
=======
const express=require("express")
const App=express()
const cors=require("cors")
>>>>>>> main

const Userauth = require("./Auth/userauth");
const Userdata = require("./Data/userdata");
const userpurchasing = require("./Purchase/userpurchase");

const connect = require("./Mongo/dbAuth");

<<<<<<< HEAD
App.use(express.urlencoded({ extended: true }));
App.use(express.json());
=======
const {connect}=require("./Mongo/dbAuth")

App.use(cors())
App.use(express.urlencoded({extended:true}));
App.use(express.json())

App.use("/Auth",Userauth)
App.use("/Data",Userdata)
App.use("/Purchase",userpurchasing)

App.get("/",(req,res)=>{
    res.send("welcome to bluefly")
})

const port =process.env.PORT || 8080


App.listen(port,async()=>{
    try{
        await connect
        console.log(`server started at ${port} and database connected`)
    }
    catch{
        console.log("something went wrong")
    }

})
>>>>>>> main

App.use("/Auth", Userauth);
App.use("/Data", Userdata);
App.use("/Purchase", userpurchasing);

App.get("/", (req, res) => {
  res.send("welcome to bluefly");
});

const port = process.env.PORT || 8080;

App.listen(port, async () => {
  try {
    await connect;
    console.log(`server started at ${port} and database connected`);
  } catch {
    console.log("something went wrong");
  }
});
