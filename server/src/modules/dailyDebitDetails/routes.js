const express = require("express");

const router = express.Router();

const dailyDebitController = require("./controller");

 router.get("/list", dailyDebitController.list);

 router.get("/list/:id", dailyDebitController.idlist);

router.post("/add", dailyDebitController.adddailyDebit);

router.delete("/delete", dailyDebitController.deletedailyDebit);

module.exports = router;