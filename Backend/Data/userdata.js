const {Router}=require("express")

const bluesky =require("../Mongo/dbbody")

const Userdata=Router()


//http://localhost:8080/Data/
Userdata.get("/",async(req,res)=>{

    const data=await bluesky.find()
    console.log(data)
    res.send(data)
})

Userdata.get("/Men's",async(req,res)=>{
    const data1=await bluesky.find({category:{$regex:"Men's"}})
    res.send(data1)
})
Userdata.get("/Women's",async(req,res)=>{
    const data1=await bluesky.find({category:{$regex:"Women's",$options:"i"}})
    res.send(data1)
})
//for searching
Userdata.get("/search",async(req,res)=>{
//http://localhost:8080/Data/search?q=value;
console.log(req.query)
    const data1=await bluesky.find({title:{$regex:req.query.q,$options:"i"}})
    console.log(data1)
    res.status(200).send(data1)
})


//for filtering

Userdata.get("/filter",async(req,res)=>{
    console.log(req.query)

    //http://localhost:8080/Data/filter?category=Women's wear|| Women's jeans || Men's Pant ||Men's Shirt ;
    if(req.query.category)
    {
        let data1=await bluesky.find({category:req.query.category})
        console.log(data1)
        return res.send(data1)
    }
    //http://localhost:8080/Data/filter?color=white|| red|| green ||grey ;
    else if(req.query.color)
    {
        let data1=await bluesky.find({$or:[{color1:req.query.color},{color2:req.query.color}]})
        console.log(data1)
        return res.send(data1)
    }
    //http://localhost:8080/Data/filter?size=small|| medium|| large
    else if(req.query.size)
    {
        let data1=await bluesky.find({sizes:req.query.size})
        console.log(data1)
        return res.send(data1)
    }
     //http://localhost:8080/Data/filter?condition=new||used
    else if(req.query.condition)
    {
        let data1=await bluesky.find({condition:req.query.condition})
        console.log(data1)
        return res.send(data1)
    }
    //http://localhost:8080/Data/filter?minPrice=500&maxPrice=1000
    else if(req.query.minPrice && req.query.maxPrice)
    {
        let data1=await bluesky.find({price:{$gt:req.query.minPrice},price:{$lt:req.query.maxPrice}})
        console.log(data1)
        return res.send(data1)
    }
   

})

//for getting particlar data like types of cateogary or different colors or brand or sizes

Userdata.get("/myval",async(req,res)=>{
    const data=await bluesky.find()

    //http://localhost:8080/Data/myval?category=find
    if(req.query.category)
    {
        let brr=[]

        data.map((ele)=>{
            if(!brr.includes(ele.category))
            {
                brr.push(ele.category)
            }
        })
        console.log(brr)
        res.send(brr)
    }

    //http://localhost:8080/Data/myval?color=find
    else if(req.query.color)
    {
        let brr=[]

        data.map((ele)=>{
            if(!brr.includes(ele.color1) && ele.color1!=null)
            {
                brr.push(ele.color1)
            }
            else if(!brr.includes(ele.color2) && ele.color2!=null)
            {
                brr.push(ele.color2)
            }
        })
        console.log(brr)
        res.send(brr)
    }

//http://localhost:8080/Data/myval?size=find
    if(req.query.size)
    {
        let brr=[]

        data.map((ele)=>{
            if(!brr.includes(ele.sizes))
            {
                brr.push(ele.sizes)
            }
        })
        console.log(brr)
        res.send(brr)
    }

//http://localhost:8080/Data/myval?condition=find
    if(req.query.condition)
    {
        let brr=[]

        data.map((ele)=>{
            if(!brr.includes(ele.condition))
            {
                brr.push(ele.condition)
            }
        })
        console.log(brr)
        res.send(brr)
    }
})







module.exports=Userdata