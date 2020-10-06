let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// User Model
let userSchema = require('../models/User');

// CREATE User
router.route('/create-user').post((req, res, next) => {
  userSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log("New user created!")
      console.log(data)
      res.json(data)
    }
  })
});

// READ Users
router.route('/').get((req, res) => {
  userSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single User
router.route('/edit-user/:id').get((req, res) => {
  userSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update User
router.route('/update-user/:id').put((req, res, next) => {
  userSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      console.log(error)
      return next(error);
    } else {
      res.json(data)
      console.log('User updated successfully !')
    }
  })
})

// Delete User
router.route('/delete-user/:id').delete((req, res, next) => {
  userSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log("User deleted")
      res.status(200).json({
        msg: data
      })
    }
  })
})

// Log-in
router.route('/log-in').get((req, res) => {
  userSchema.findOne({email: req.query.email, password: req.query.password}, (error, data) => {
    console.log(req.query.email)
    console.log(req.query.password)
    if (error) {
      return next(error)
    } else if (data) {
      console.log("Login successful!");
      console.log(data)
      res.json(data)
    }
    else {
      console.log("Invalid email or password")
      res.json(data)
    }
  })
})

module.exports = router;
