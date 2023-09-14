const dailyDebit = require('./dailyDebit');

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
      //isPaid: false, // Initially, set isPaid to false for each installment
    };

    repaymentSchedule.push(installment);
  }


  new dailyDebit({
    fname: fname,
    amount: amount,
    duration: duration,
    date: date,
    repaymentSchedule: repaymentSchedule // Include the generated repayment schedule
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