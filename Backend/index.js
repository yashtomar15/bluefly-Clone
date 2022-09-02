const express = require("express");
const App = express();
const cors = require("cors");

const Userauth = require("./Auth/userauth");
const Userdata = require("./Data/userdata");
const userpurchasing = require("./Purchase/userpurchase");

const { connect } = require("./Mongo/dbAuth");

App.use(cors());
App.use(express.urlencoded({ extended: true }));
App.use(express.json());

App.use("/Auth", Userauth);
App.use("/Data", Userdata);
App.use("/Purchase", userpurchasing);

App.get("/", (req, res) => {
  res.send("welcome to blueflywebsite this is a backend");
});

const port =process.env.PORT || 8080;

App.listen(port, async () => {
  try {
    await connect;
    console.log(`server started at ${port} and database connected`);
  } catch {
    console.log("something went wrong");
  }
});
