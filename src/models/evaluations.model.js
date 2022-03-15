const mongoose=require("mongoose");

const evaluationsSchema=new mongoose.Schema(
    {
        dateOfEvaluations:{type:String,require: true},
        instructorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: false,
          },
          batchId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "batchs",
            required: false,
          },
    },
    {
        versionKey:false,
        timestamps:true,
    }
)

const Evaluations =mongoose.model("evaluations",evaluationsSchema);

module.exports=Evaluations;


