//import jwtSecret from './jwtConfig';
//import bcrypt from 'bcrypt';

const BCRYPT_SALT_ROUNDS = 12;

const passport = require("passport"),
  localStrategy = require("passport-local").Strategy,
  JWTstrategy = require("passport-jwt").Strategy,
  ExtractJWT = require("passport-jwt").ExtractJwt,
  mongoose = require("mongoose"),
  jwtSecret = require("./jwtConfig"),
  bcrypt = require("bcrypt");
let userSchema = require("../models/User");
const createError = require('http-errors');
 
passport.use(
  "register",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      session: false,
    },
    (email, password, done) => {
      console.log("boom");
      try {
        userSchema
          .findOne({
              email: email,
          })
          .then(user => {
            if (user != null) {
              console.log(user);
              console.log("email already taken");
              return done(null, false,  { message: 'username already taken' });
            } else {
              console.log("creating user...");
              bcrypt
                .hash(password, BCRYPT_SALT_ROUNDS)
                .then((hashedPassword) => {
                  userSchema
                    .create({ email: email, password: hashedPassword })
                    .then((user) => {
                      console.log("user created");
                      // note the return needed with passport local - remove this return for passport JWT to work
                      return done(null, user);
                    });
                });
            }
          });
      } catch (err) {
        console.log("Successfully caught error")
        done(err);
      }
    }
  )
);

passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      session: false,
    },
    (email, password, done) => {
      try {
        console.log(email)
        userSchema.findOne({
            email: email,
        }).then(user => {
          if (user === null) {
            return done(null, false, { message: "bad username" });
          } else {
            bcrypt.compare(password, user.password).then((response) => {
              if (response !== true) {
                console.log("passwords do not match!!");
                return done(null, false, { message: "passwords do not match" });
              }
              console.log("user found & authenticated");
              // note the return needed with passport local - remove this return for passport JWT
              return done(null, user);
            });
          }
        });
      } catch (err) {
        done(err);
      }
    }
  )
);

const opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme("JWT"),
  secretOrKey: jwtSecret.secret,
};

passport.use(
  "jwt",
  new JWTstrategy(opts, (jwt_payload, done) => {
    console.log("in JWT")
    try {
      userSchema.findOne({
          email: jwt_payload.id,
      }).then((user) => {
        if (user) {
          console.log("user found in db in passport");
          // note the return removed with passport JWT - add this return for passport local
          done(null, user);
        } else {
          console.log("user not found in db");
          done(null, false);
        }
      });
    } catch (err) {
      console.log("caught an error")
      done(err);
    }
  })
);

passport.serializeUser(function (user, cb) {
    cb(null, user.id);
});
 
passport.deserializeUser(function (id, cb) {
 
    cb(null, user);
 
});
