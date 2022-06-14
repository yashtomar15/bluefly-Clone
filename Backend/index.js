const express=require("express")
const App=express()

const Userauth=require("./Auth/userauth")
const Userdata=require("./Data/userdata")

const {connect}=require("./Mongo/dbAuth")

App.use(express.urlencoded({extended:true}));
App.use(express.json())

App.use("/Auth",Userauth)
App.use("/Data",Userdata)


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




