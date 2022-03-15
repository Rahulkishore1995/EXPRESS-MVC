const mongoose=require("mongoose");

const connect=()=>{
    return mongoose.connect(
        "mongodb+srv://rahulkishore425:kishore_1995@myfirstdatabasecluster0.ad5cz.mongodb.net/ExpressMVC?retryWrites=true&w=majority"
    );
};

module.exports=connect;