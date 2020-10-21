let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router(),
  passport = require("passport"),
  jwt = require('jsonwebtoken'),
  jwtSecret = require("../config/jwtConfig");

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
router.route("/log-in").get((req, res, next) => {
  passport.authenticate('login', (err, user, info) => {
    if (err) {
      console.log(err);
      res.status(401).send(err)
    }
    else if (!user) {
      console.log("no user")
      console.log(info.message);
      res.status(201).send({message: info.message});
    } else {
      console.log("good credentials")
      req.logIn(user, err => {
        userSchema.findOne({
            email: user.email,
        }).then(user => {
          const token = jwt.sign({ id: user.email }, jwtSecret.secret);
          res.status(200).send({
            auth: true,
            token: token,
            message: 'user found & logged in',
          });
        });
      });
    }
  })(req, res, next);
});

// CREATE User
router.route("/create-user").post((req, res, next) => {
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
