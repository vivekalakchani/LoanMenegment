const mongoose =require("mongoose");
const counterSchema = new mongoose.Schema({
    id:{type:String},
    seq:{type:Number}
   
});

// create model
const counter =new mongoose.model("counters",counterSchema);

module.exports=counter;