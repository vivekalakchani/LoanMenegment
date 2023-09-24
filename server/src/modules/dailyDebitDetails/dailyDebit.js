const mongoose = require("mongoose");

const dailyDebitSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    amount: {
        type: Number,
    },
    
    duration:{
        type:Number,
        required:true
    },
    
    date:{
         type: Date, 
    },
    repaymentSchedule: [
        {
          installmentNumber: Number,
          dueDate: Date,
          installmentAmount: Number,
          remainingBalance: Number,
        }
      ],
      dailyDebitid: { type: String },
      Loanid: { type: String },
      LoanIdMongo:{type :mongoose.Schema.Types.ObjectId,
    ref:'loandetails'}
});

// create model
const dailyDebit = new mongoose.model("dailydebits", dailyDebitSchema);

module.exports = dailyDebit;