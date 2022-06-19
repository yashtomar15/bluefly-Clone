const { Router } = require("express");
const Purch = require("../Mongo/dbpurchase");

const userpurchasing = Router();

userpurchasing.get("/", async (req, res) => {
  //http://localhost:8080/Purchase?id=62a8dac5e7666e25a1b9738d
  //id value you give which is saved in auth
  const { id } = req.query;
  const showdata = await Purch.find({ id: id });
  res.send(showdata);
});

userpurchasing.post("/", async (req, res) => {
  // http://localhost:8080/Purchase
  //make sure req.body has this fields
  //    {
  //     id:which is saved in auth,
  //     title,
  //     price,
  //     quantity,
  //     status="purchased"
  //    }
  const data = new Purch(req.body);
  await data.save();

  res.send({ message: "order sucessfullt", data: data });
});

module.exports = userpurchasing;
