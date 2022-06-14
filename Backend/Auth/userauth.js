const {Router} =require("express")


const Userauth=Router()



Userauth.post("/signup",(req,res)=>{
    res.send("account created")
})

Userauth.post("/login",(req,res)=>{
    res.send("account verified")
})

module.exports=Userauth