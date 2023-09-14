const express = require("express");

const router = express.Router();

const loanController = require("./controller");

router.get("/list", loanController.list);

router.post("/add", loanController.add);

router.delete("/delete", loanController.delete);

module.exports = router;
