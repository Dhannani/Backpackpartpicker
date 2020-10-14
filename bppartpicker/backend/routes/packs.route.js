let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router(),
  passport = require("passport"),
  jwt = require('jsonwebtoken'),
  jwtSecret = require("../config/jwtConfig");
require("../config/passport-auth");

  router.route("/")
  .get((req, res) => {
    console.log("authorizing...")
    passport.authenticate("jwt", (err, user, info) => {
        if (err) {
          console.log(err);
        }
        if (user) {
          console.log("SUCCESS");
          res.status(200).send("user was created bad boy")
        } else {
          console.log("we in the ELSE BRUV")
          res.status(200).send("username exists already mate");
        }
      })(req, res)
  });

  module.exports = router;