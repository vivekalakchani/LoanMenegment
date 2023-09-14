const loan = require("./loanDetails");

function loanService() {

  return {

    list: () => loan.find(),

    add: data => new loan(data).save(),

    delete: id => loan.findByIdAndRemove(id)

  };
}

module.exports = loanService();

