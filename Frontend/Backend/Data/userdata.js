const {Router}=require("express")

const bluesky =require("../Mongo/dbbody")

const Userdata=Router()



Userdata.get("/",async(req,res)=>{

    const data=await bluesky.find()
    console.log(data)
    res.send(data)
})


module.exports=Userdata