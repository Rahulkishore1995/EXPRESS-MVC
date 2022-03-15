const mongoose=require("mongoose");

const batchsSchema=new mongoose.Schema(
    {
        batchName:{type:String,require: true}
    },
    {
        versionKey:false,
        timestamps:true,
    }
)

const Batchs=mongoose.model("batchs",batchsSchema);

module.exports=Batchs;