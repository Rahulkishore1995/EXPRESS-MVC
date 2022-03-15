
const express=require("express");
const Users=require("../models/users.models")
const app=express();


app.get("/", async (req, res) => {
    try {
      const users = await Users.find().lean().exec();
  
      return res.status(200).send({ users: users }); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message: err.message });
    }
  });
  
  app.post("/", async (req, res) => {
    try {
      const users = await Users.create(req.body);
      console.log(users);
  
      return res.status(201).send(users);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });


  module.exports=app;