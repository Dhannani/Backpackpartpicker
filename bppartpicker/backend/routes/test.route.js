let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router(),
  passport = require("passport"),
  jwt = require('jsonwebtoken'),
  jwtSecret = require("../config/jwtConfig");

router.use(passport.initialize());

require("../config/passport-auth");
// User Model
let productSchema = require("../models/Products");
let app = express();

const createError = require('http-errors');

router.route("/push-tents").post((req, res, next) => {
  let tents = require("../database/schemaTest.json").Tent;
  //tents = JSON.parse(JSON.stringify(tents))
  //console.log(tents)
  for(var key of Object.keys(tents)) {
    tent = tents[key]
    newTent = new productSchema();
    newTent.Name = tent.Name
    console.log(newTent)
  }
  productSchema.insertMany(tents, function(err,result) {
    if (err) {
      res.send("error")
    } else {
      res.send(result)
    }
 })
});

router.route("/get-tents").get((req, res, next) => {
  productSchema.findById( 
    
      "5fa9d86936c471671cb12b2e"
    
  ).then(tent =>{
      res.send(tent)
      console.log(tent.Name)
    })
});

module.exports = router;
