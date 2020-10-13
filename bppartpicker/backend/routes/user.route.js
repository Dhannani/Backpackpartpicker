let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router(),
  passport = require("passport");
router.use(passport.initialize());

require("../config/passport-auth");
// User Model
let userSchema = require("../models/User");
let app = express()

const createError = require('http-errors');

// READ Users 
router.route("/")
  .get((req, res) => {
    userSchema.find((error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  });


// Get Single User
router.route("/edit-user/:id").get((req, res) => {
  userSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update User
router.route("/update-user/:id").put((req, res, next) => {
  userSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data);
        console.log("User updated successfully !");
      }
    }
  );
});

// Delete User
router.route("/delete-user/:id").delete((req, res, next) => {
  userSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log("User deleted");
      res.status(200).json({
        msg: data,
      });
    }
  });
});

// Log-in
router.route("/log-in").get((req, res) => {
  userSchema.findOne(
    { email: req.query.email, password: req.query.password },
    (error, data) => {
      console.log(req.query.email);
      console.log(req.query.password);
      if (error) {
        console.log("error happened");
        return next(error);
      } else if (data) {
        //login successful
        console.log("Login successful!");
        console.log(data);
        res.status(200).send("Login Successful!");
      } else {
        //invalid email/password
        console.log("Invalid email or password");
        res.status(201).send("Invalid email or password");
      }
    }
  );
});

// CREATE User
router.route("/create").post((req, res, next) => {
  console.log("HERE")
  passport.authenticate("register", (err, user, info) => {
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
  })(req,res,next);
});
  // , { successRedirect: 'http://localhost:3000/login', failureRedirect: 'http://localhost:3000/login' }
  // console.log("test")
  // if (res) {
  //   console.log("asdasdasd");
  //   res.send("User Created!");
  // } else {
  //   console.log("YOLO");
  // }


// router.post("/create-user", function (req, res, next) {
//   passport.authenticate("register",
//     // , {successRedirect: 'http://localhost:3000/login', failureRedirect: 'http://localhost:3000/login'}
//     function (err, user, info) {
//       if (err) {
//         console.log(err)
//       }
//       if (!user) {
//         console.log("!user")
//       }
//       else {
//         console.log(
//           "MADE IT FULE"
//         )
//       }
//     })
// });

module.exports = router;
