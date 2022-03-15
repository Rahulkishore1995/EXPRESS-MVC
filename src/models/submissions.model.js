const mongoose=require("mongoose");

const submissionsSchema=new mongoose.Schema(
    {
        marks:{type:Number,require: true},
        evalutationsId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "evaluations",
            required: true,
          },
        
          studentsId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: true,
          },
    },
    {
        versionKey:false,
        timestamps:true,
    }
)

module.exports =mongoose.model("submissions",submissionsSchema);
