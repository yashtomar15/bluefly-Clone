const {Router}=require("express")

const Userdata=Router()



Userdata.get("/",(req,res)=>{
    res.send("product details")
})


module.exports=Userdata