const dailyDebit = require('./dailyDebit');
const Counter = require("./../../counter");
const loan = require("../loanDetails/loanDetails")

const adddailyDebitData= async (fname, amount,duration) => {
  const date = new Date();
  const installmentAmount = amount / duration;
  const repaymentSchedule = [];

  console.log(installmentAmount);

  for (let i = 1; i <= duration; i++) {
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + i);

    const installment = {
      installmentNumber: i,
      dueDate,
      installmentAmount,
      remainingBalance: amount - i * installmentAmount
    };

    repaymentSchedule.push(installment);
  }
  let trSeq = await Counter.getNextSequence();
  const loandetails= await loan.findOne({fname:fname ,amount:amount,duration:duration});
 const debit =new dailyDebit({
    fname: fname,
    amount: amount,
    duration: duration,
    date: date,
    repaymentSchedule: repaymentSchedule ,
    dailyDebitid:`DailyDebit_${trSeq}`,
    Loanid:`Loan_${trSeq}`,
    LoanIdMongo:loandetails._id
  }).save();

}


const getlist= () => dailyDebit.find();

const  idlist= (id) =>dailyDebit.findById(id);

const deleteData= id => dailyDebit.findByIdAndRemove(id);

module.exports = {

  adddailyDebitData:adddailyDebitData,
  getlist:getlist,
  idlist:idlist,
  deleteData:deleteData
  
};