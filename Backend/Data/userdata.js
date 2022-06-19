const { Router } = require("express");

const bluesky = require("../Mongo/dbbody");

const Userdata = Router();

//http://localhost:8080/Data/
Userdata.get("/", async (req, res) => {
  const data = await bluesky.find();
  console.log(data);
  res.send(data);
});

Userdata.get("/Men's", async (req, res) => {
  const data1 = await bluesky.find({ category: { $regex: "Men's" } });
  res.send(data1);
});
Userdata.get("/Women's", async (req, res) => {
  const data1 = await bluesky.find({
    category: { $regex: "Women's", $options: "i" },
  });
  res.send(data1);
});
//for searching
Userdata.get("/search", async (req, res) => {
  //http://localhost:8080/Data/search?q=value;
  console.log(req.query);
  const data1 = await bluesky.find({
    title: { $regex: req.query.q, $options: "i" },
  });
  console.log(data1);
  res.status(200).send(data1);
});

//for filtering

Userdata.get("/filter", async (req, res) => {
  console.log(req.query);
  // for filtering women's data

  {
    //http://localhost:8080/Data/filter?category=Women's wear|| Women's jeans || Men's Pant ||Men's Shirt ;
    if (req.query.category) {
      let data1 = await bluesky.find({ category: req.query.category });
      console.log(data1);
      return res.send(data1);
    }
    //http://localhost:8080/Data/filter?womenscolor=white|| red|| green ||grey ;
    else if (req.query.womenscolor) {
      console.log(req.query, "inside");
      let data1 = await bluesky.find({
        $or: [
          { color1: req.query.womenscolor },
          { color2: req.query.womenscolor },
        ],
        category: ["Women's wear", "Women's jeans"],
      });
      // console.log(data1)
      return res.send(data1);
    }
    //http://localhost:8080/Data/filter?womensize=small|| medium|| large
    else if (req.query.womenssize) {
      let data1 = await bluesky.find({
        sizes: req.query.womenssize,
        category: ["Women's wear", "Women's jeans"],
      });
      console.log(data1);
      return res.send(data1);
    }
    //http://localhost:8080/Data/filter?womenscondition=new||used
    else if (req.query.womenscondition) {
      let data1 = await bluesky.find({
        condition: req.query.womenscondition,
        category: ["Women's wear", "Women's jeans"],
      });
      console.log(data1);
      return res.send(data1);
    } else if (req.query.id) {
      let data = await bluesky.findById(req.query.id);
      return res.send(data);
    }
    //http://localhost:8080/Data/filter?womensbrand=polo||canvas||nike
    else if (req.query.womensbrand) {
      let data1 = await bluesky.find({
        brand: req.query.womensbrand,
        category: ["Women's wear", "Women's jeans"],
      });
      console.log(data1);
      return res.send(data1);
    }
    //http://localhost:8080/Data/filter?womensMinPrice=500&womenMaxPrice=1000
    else if (req.query.womensMinPrice && req.query.womens < axPrice) {
      let data1 = await bluesky.find({
        price: { $gt: req.query.womensMinPrice },
        price: { $lt: req.query.womenMaxPrice },
        category: { $regex: "women's", $options: "i" },
      });
      console.log(data1);
      return res.send(data1);
    }
    //http://localhost:8080/Data/filter?trendingcat=bestseller||trending
    else if (req.query.womenstrendingcat) {
      let data1 = await bluesky.find({
        Trending: req.query.womenstrendingcat,
        category: ["Women's wear", "Women's jeans"],
      });
      console.log(data1);
      return res.send(data1);
    }
  }
  // Additional queries by yash
  // for filtering men's data

  {
    //  http://localhost:8080/Data/filter?menscolor=white|| red|| green ||grey ;
    if (req.query.menscolor) {
      let data1 = await bluesky.find({
        $or: [{ color1: req.query.menscolor }, { color2: req.query.menscolor }],
        category: ["Men's Shirt", "Men's Pant"],
      });
      return res.send(data1);
    }
    //http://localhost:8080/Data/filter?menssize=small|| medium|| large
    else if (req.query.menssize) {
      let data1 = await bluesky.find({
        sizes: req.query.menssize,
        category: ["Men's Shirt", "Men's Pant"],
      });
      console.log(data1);
      return res.send(data1);
    }
    //http://localhost:8080/Data/filter?menscondition=new||used
    else if (req.query.menscondition) {
      let data1 = await bluesky.find({
        condition: req.query.menscondition,
        category: ["Men's Shirt", "Men's Pant"],
      });
      console.log(data1);
      return res.send(data1);
    }
    //http://localhost:8080/Data/filter?mensbrand=polo||canvas||nike
    else if (req.query.mensbrand) {
      let data1 = await bluesky.find({
        brand: req.query.mensbrand,
        category: ["Men's Shirt", "Men's Pant"],
      });
      console.log(data1);
      return res.send(data1);
    }
    //http://localhost:8080/Data/filter?mensMinPrice=500&menMaxPrice=1000
    else if (req.query.mensMinPrice && req.query.mensMaxPrice) {
      let data1 = await bluesky.find({
        price: { $gt: req.query.mensMinPrice },
        price: { $lt: req.query.mensMaxPrice },
        category: ["Men's Shirt", "Men's Pant"],
      });
      console.log(data1);
      return res.send(data1);
    }
    //http://localhost:8080/Data/filter?menstrendingcat=bestseller||trending
    else if (req.query.menstrendingcat) {
      let data1 = await bluesky.find({
        Trending: req.query.menstrendingcat,
        category: ["Men's Shirt", "Men's Pant"],
      });
      console.log(data1);
      return res.send(data1);
    }
  }
});

// New contribution by yash---->
// For sorting women's data

Userdata.get("/sortwomens", async (req, res) => {
  const { title, price } = req.query;

  {
    //http://localhost:8080/Data/sortwomens?title=inc
    if (title && title === "inc") {
      let data = await bluesky
        .find({ category: { $regex: "women's", $options: "i" } })
        .sort({ title: 1 });
      res.send(data);
    }
    //http://localhost:8080/Data/sortwomens?title=dec
    else if (title && title === "dec") {
      let data = await bluesky
        .find({ category: { $regex: "women's", $options: "i" } })
        .sort({ title: -1 });
      res.send(data);
    }
    //http://localhost:8080/Data/sortwomens?price=inc
    else if (price && price === "inc") {
      let data = await bluesky
        .find({ category: { $regex: "women's", $options: "i" } })
        .sort({ price: 1 });
      res.send(data);
    }
    //http://localhost:8080/Data/sortwomens?price=dec
    else if (price && price === "dec") {
      let data = await bluesky
        .find({ category: { $regex: "women's", $options: "i" } })
        .sort({ price: -1 });
      res.send(data);
    }
  }
});

// For sorting mens data

Userdata.get("/sortmens", async (req, res) => {
  const { title, price } = req.query;

  {
    //http://localhost:8080/Data/sortmens?title=inc
    if (title && title === "inc") {
      let data = await bluesky
        .find({ category: { $regex: "men's", $options: "i" } })
        .sort({ title: 1 });
      res.send(data);
    }
    //http://localhost:8080/Data/sortmens?title=dec
    else if (title && title === "dec") {
      let data = await bluesky
        .find({ category: { $regex: "men's", $options: "i" } })
        .sort({ title: -1 });
      res.send(data);
    }
    //http://localhost:8080/Data/sortmens?price=inc
    else if (price && price === "inc") {
      let data = await bluesky
        .find({ category: { $regex: "men's", $options: "i" } })
        .sort({ price: 1 });
      res.send(data);
    }
    //http://localhost:8080/Data/sortmens?price=dec
    else if (price && price === "dec") {
      let data = await bluesky
        .find({ category: { $regex: "men's", $options: "i" } })
        .sort({ price: -1 });
      res.send(data);
    }
  }
});

//for getting particlar data like types of cateogary or different colors or brand or sizes

Userdata.get("/myval", async (req, res) => {
  const data = await bluesky.find();

  //http://localhost:8080/Data/myval?category=find
  if (req.query.category) {
    let brr = [];

    data.map((ele) => {
      if (!brr.includes(ele.category)) {
        brr.push(ele.category);
      }
    });
    console.log(brr);
    res.send(brr);
  }

  //http://localhost:8080/Data/myval?color=find
  else if (req.query.color) {
    let brr = [];

    data.map((ele) => {
      if (!brr.includes(ele.color1) && ele.color1 != null) {
        brr.push(ele.color1);
      } else if (!brr.includes(ele.color2) && ele.color2 != null) {
        brr.push(ele.color2);
      }
    });
    console.log(brr);
    res.send(brr);
  }

  //http://localhost:8080/Data/myval?size=find
  if (req.query.size) {
    let brr = [];

    data.map((ele) => {
      if (!brr.includes(ele.sizes)) {
        brr.push(ele.sizes);
      }
    });
    console.log(brr);
    res.send(brr);
  }

  //http://localhost:8080/Data/myval?condition=find
  if (req.query.condition) {
    let brr = [];

    data.map((ele) => {
      if (!brr.includes(ele.condition)) {
        brr.push(ele.condition);
      }
    });
    console.log(brr);
    res.send(brr);
  }
  //http://localhost:8080/Data/myval?brands=find
  else if (req.query.brands) {
    let brr = [];

    data.map((ele) => {
      if (!brr.includes(ele.brand)) {
        brr.push(ele.brand);
      }
    });
    console.log(brr);
    res.send(brr);
  }
  //http://localhost:8080/Data/myval?trendingcat=find
  else if (req.query.trendingcat) {
    let brr = [];

    data.map((ele) => {
      if (!brr.includes(ele.Trending)) {
        brr.push(ele.Trending);
      }
    });
    console.log(brr);
    res.send(brr);
  }
});

module.exports = Userdata;
