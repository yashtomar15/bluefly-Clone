const express=require("express")
const App=express()

const Userauth=require("./Auth/userauth")
const Userdata=require("./Data/userdata")

const connect=require("./Mongo/dbAuth")

App.use(express.urlencoded({extended:true}));
App.use(express.json())

App.use("/Auth",Userauth)
App.use("/Data",Userdata)

App.get("/",(req,res)=>{
    res.send("welcome to bluefly")
})

const port =process.env.PORT || 8080


App.listen(port,async()=>{
    try{
        await connect
        console.log("started")
    }
    catch{
        console.log("something went wrong")
    }

})




