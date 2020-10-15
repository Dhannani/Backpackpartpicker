let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router(),
  passport = require("passport"),
  jwt = require("jsonwebtoken"),
  jwtSecret = require("../config/jwtConfig");
require("../config/passport-auth");
router.use(passport.initialize());

router.route("/").get(passport.authenticate("jwt"), (req, res) => {
  if (res) {
    console.log("SUCCESS");
    res.status(200).send("user was AUTHENTICATED bad boy");
  } else {
    console.log("we in the ELSE BRUV");
    res.status(200).send("username exists already mate");
  }
});

module.exports = router;
