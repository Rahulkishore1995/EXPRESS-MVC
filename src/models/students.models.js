const mongoose=require("mongoose");

const studentsSchema=new mongoose.Schema(
    {
        rollId:{type:Number,require: true},
        currentBatch:{ type:String, require: true},
        usersId: {
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

const Students =mongoose.model("students",studentsSchema);

module.exports=Students;