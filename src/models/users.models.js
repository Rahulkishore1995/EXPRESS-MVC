const mongoose=require("mongoose");

const usersSchema= new mongoose.Schema(

    {
        firstName:{type:String,require:true},
        lastName: { type: String, required: true },
        gender:{type:String,require: true},
        dateOfBirth:{type:String,require: true},
        type:{type:String,require: true}
    },
    {
        versionKey:false,
        timestamps:true,
    }
);

const Users=mongoose.model("users",usersSchema);

module.exports=Users;