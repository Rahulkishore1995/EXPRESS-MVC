const express= require("express");
// const mongoose=require("mongoose");
// const mongoose=require("mongoose");
const app= express();
// const User=require("./models/users.models");
// const Students=require("./models/students.models");
// const Batchs=require("./models/batchs.models");
// const Evaluations =require("./models/evaluations.model");
// const Submissions=require("./models/submissions.model");
app.use(express.json());

const usersControllers=require("./controllers/users.controllers");
const studentsControllers=require("./controllers/students.controllers");
const batchsControllers=require("./controllers/batchs.controllers");
const evaluationsControllers=require("./controllers/evaluations.controllers");
const submissionsControllers=require("./controllers/submissions.controllers");


app.use("/users",usersControllers);

app.use("/batchs",batchsControllers);
app.use("/students",studentsControllers);
app.use("/evaluations",evaluationsControllers);
app.use("/submissions",submissionsControllers);

const connect=require("./configs/db");

// const app=require("./controllers/users.controllers")

// const connect=()=>{
//     return mongoose.connect(
//         "mongodb+srv://rahulkishore425:kishore_1995@myfirstdatabasecluster0.ad5cz.mongodb.net/ExpressMVC?retryWrites=true&w=majority"
//     );
// };

// const usersSchema= new mongoose.Schema(

//     {
//         firstName:{type:String,require:true},
//         lastName: { type: String, required: true },
//         gender:{type:String,require: true},
//         dateOfBirth:{type:String,require: true},
//         type:{type:String,require: true}
//     },
//     {
//         versionKey:false,
//         timestamps:true,
//     }
// );

// const Users=mongoose.model("users",usersSchema);

// const studentsSchema=new mongoose.Schema(
//     {
//         rollId:{type:Number,require: true},
//         currentBatch:{ type:String, require: true},
//         usersId: {
//           type: mongoose.Schema.Types.ObjectId,
//           ref: "users",
//           required: true,
//         },

//     },
//     {
//         versionKey:false,
//         timestamps:true,
//     }
// )

// const Students =mongoose.model("students",studentsSchema);

// const batchsSchema=new mongoose.Schema(
//     {
//         batchName:{type:String,require: true}
//     },
//     {
//         versionKey:false,
//         timestamps:true,
//     }
// )

// const Batchs=mongoose.model("batchs",batchsSchema);

// const evaluationsSchema=new mongoose.Schema(
//     {
//         dateOfEvaluations:{type:String,require: true},
//         instructorId: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "users",
//             required: true,
//           },
//           batchId: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "batch",
//             required: true,
//           },
//     },
//     {
//         versionKey:false,
//         timestamps:true,
//     }
// )

// const Evaluations =mongoose.model("evaluations",evaluationsSchema);


// const submissionsSchema=new mongoose.Schema(
//     {
//         marks:{type:Number,require: true},
//         evalutationsId: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "evalutations",
//             required: true,
//           },
        
//           studentsId: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "users",
//             required: true,
//           },
//     },
//     {
//         versionKey:false,
//         timestamps:true,
//     }
// )

// const Submissions=mongoose.model("submissions",submissionsSchema);

// app.get("/users", async (req, res) => {
//     try {
//       const users = await Users.find().lean().exec();
  
//       return res.status(200).send({ users: users }); // []
//     } catch (err) {
//       return res
//         .status(500)
//         .send({ message: err.message });
//     }
//   });
  
//   app.post("/users", async (req, res) => {
//     try {
//       const users = await Users.create(req.body);
//       console.log(users);
  
//       return res.status(201).send(users);
//     } catch (err) {
//       return res.status(500).send({ message: err.message });
//     }
//   });



  // app.get("/students", async (req, res) => {
  //   try {
  //     const students = await Students.find().lean().exec();
  
  //     return res.status(200).send({ students: students }); // []
  //   } catch (err) {
  //     return res
  //       .status(500)
  //       .send({ message: err.message });
  //   }
  // });
  
  // app.post("/students", async (req, res) => {
  //   try {
  //     const students = await Students.create(req.body);
  
  //     return res.status(201).send(students);
  //   } catch (err) {
  //     return res.status(500).send({ message: err.message });
  //   }
  // });

  // app.get("/batchs", async (req, res) => {
  //   try {
  //     const batchs = await Batchs.find().lean().exec();
  
  //     return res.status(200).send({ batchs: batchs }); // []
  //   } catch (err) {
  //     return res
  //       .status(500)
  //       .send({ message: err.message });
  //   }
  // });
  
  // app.post("/batchs", async (req, res) => {
  //   try {
  //     const batchs = await Batchs.create(req.body);
  
  //     return res.status(201).send(batchs);
  //   } catch (err) {
  //     return res.status(500).send({ message: err.message });
  //   }
  // });




  // app.get("/evaluations", async (req, res) => {
  //   try {
  //     const evaluations = await Evaluations.find().lean().exec();
  
  //     return res.status(200).send({ evaluations : evaluations  }); // []
  //   } catch (err) {
  //     return res
  //       .status(500)
  //       .send({ message: err.message });
  //   }
  // });
  
  // app.post("/evaluations", async (req, res) => {
  //   try {
  //     const evaluations  = await Evaluations.create(req.body);
  
  //     return res.status(201).send(evaluations );
  //   } catch (err) {
  //     return res.status(500).send({ message: err.message });
  //   }
  // });

  // app.get("/submissions", async (req, res) => {
  //   try {
  //     const submissions = await  Submissions.find().lean().exec();
  
  //     return res.status(200).send({ submissions: submissions }); // []
  //   } catch (err) {
  //     return res
  //       .status(500)
  //       .send({ message: err.message });
  //   }
  // });
  
  // app.post("/submissions", async (req, res) => {
  //   try {
  //     const submissions = await Submission.create(req.body);
  
  //     return res.status(201).send(submissions);
  //   } catch (err) {
  //     return res.status(500).send({ message: err.message });
  //   }
  // });

app.listen(5000, async () => {
    try {
      await connect();
    } catch (err) {
      console.log(err);
    }
  
    console.log("listening on port 5000");
  });

 