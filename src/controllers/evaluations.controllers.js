const express=require("express");
const Evaluations = require("../models/evaluations.model");

const app=express();


  app.get("", async (req, res) => {
    try {
      const evaluations = await Evaluations.find().lean().exec();
  
      return res.status(200).send({ evaluations : evaluations  }); // []
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .send({ message: err.message });
    }
  });
  
  app.post("", async (req, res) => {
    try {
      const evaluations  = await Evaluations.create(req.body);
  
      return res.status(201).send(evaluations );
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: err.message });
    }
  });

  module.exports=app;