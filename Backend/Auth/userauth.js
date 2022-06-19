const { Router } = require("express");
const { User } = require("../Mongo/dbAuth"); //User model

const Userauth = Router();

Userauth.post("/signup", async (req, res) => {
  // console.log(req.body);
  const user = await new User(req.body);
  await user.save();
  res.send({ status: 200, response: "Account created succesfully" });
});

Userauth.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const data = await User.find({ email: `${email}`, password: `${password}` });
  if (data.length !== 0) {
    res.send({
      status: 200,
      response: "Login Succesfully",
      token: data[0]._id,
    });
  } else {
    res.send({ status: 400, response: "Invalid credentials" });
  }
});

module.exports = Userauth;
