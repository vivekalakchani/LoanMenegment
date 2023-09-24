const mongoose =require("mongoose");

const moment = require('moment');

const loanSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    imgpath:{
        type:String,
       
    },

    duration:{
        type:Number,
        required:true
    },
    date:{
        type: Date, default: function () { return moment().format('YYYY-MM-DD'); 
   }}
});

// create model
const loan =new mongoose.model("loandetails",loanSchema);

module.exports=loan;