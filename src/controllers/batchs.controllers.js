const express=require("express");
const Batchs = require("../models/batchs.models");
const app=express();


 app.get("", async (req, res) => {
    try {
      const batchs = await Batchs.find().lean().exec();
  
      return res.status(200).send({ batchs: batchs }); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message: err.message });
    }
  });
  
  app.post("", async (req, res) => {
    try {
      const batchs = await Batchs.create(req.body);
  
      return res.status(201).send(batchs);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  module.exports=app;