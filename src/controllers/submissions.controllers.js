const express=require("express");
const Submissions=require("../models/submissions.model")
const app=express();


  app.get("", async (req, res) => {
    try {
      const submissions = await  Submissions.find().lean().exec();
  
      return res.status(200).send({ submissions: submissions }); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message: err.message });
    }
  });
  
  app.post("", async (req, res) => {
    try {
      const submissions = await Submissions.create(req.body);
  
      return res.status(201).send(submissions);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  module.exports=app;