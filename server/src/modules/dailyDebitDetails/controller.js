const Service = require("./service");

const adddailyDebit = async (req, res) => {
  const fname = req.body.fname;

  const amount = req.body.amount;

  const duration = req.body.duration;

  try {
    const response = await Service.adddailyDebitData(fname, amount, duration);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

const list = async (req, res) => {
  Service.getlist().then((data) => res.json(data));
};

const idlist = function (req, res) {
  const id = req.params.id;
  Service.idlist(id).then((data) => res.json(data));
  console.log(id);
};

const deletedailyDebit = function (req, res) {
  Service.deleteData(req.param.id).then((data) => res.json(data));
};

module.exports = {
  adddailyDebit: adddailyDebit,
  list: list,
  idlist: idlist,
  deletedailyDebit: deletedailyDebit,
};
