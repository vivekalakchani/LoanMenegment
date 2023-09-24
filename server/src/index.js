
const express = require("express");

const app = express();

const BodyParser = require("body-parser");

const counter = require("./counter");

const loanRoutes = require("./modules/loanDetails/routes");

const dailyRoutes = require("./modules/dailyDebitDetails/routes");

const cors = require("cors");

require("dotenv").config();

require("../db/conn");

var allowedOrigins = 'http://localhost:3000';
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));


// parse application/json
app.use(BodyParser.json());

app.use("/loanDetails", loanRoutes);

app.use("/uploads",express.static("./uploads"));

app.use("/dailyDetails", dailyRoutes);
module.exports = app;
