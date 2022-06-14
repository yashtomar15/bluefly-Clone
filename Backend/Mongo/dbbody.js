const mongoose=require("mongoose")

const blueSchema=mongoose.Schema({

    men_products:{}
})


const bluesky=mongoose.model("blue",blueSchema)

module.exports=bluesky

