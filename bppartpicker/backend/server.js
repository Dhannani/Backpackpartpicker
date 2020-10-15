let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let dbConfig = require('./database/db');
let createError = require('http-errors');
// Express Route
const userRoute = require('../backend/routes/user.route'),
      packsRoute = require('../backend/routes/packs.route');
require("../backend/config/passport-auth");
let passport = require("passport");

// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
  useNewUrlParser: true
}).then(() => {
  console.log('Database sucessfully connected!')
},
  error => {
    //const collection = client.db("Dev-Test").collection("Dev-Test-Collection");
    console.log('Could not connect to database : ' + error)
    console.log('database uri: ' + dbConfig.db)
  }
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/users', userRoute)
app.use('/packs', packsRoute)

//FIX THIS LATER

app.use(passport.initialize());


// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});

app.use((req, res, next) => {
  next(createError(401));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});



/**
 * middleware for checking authorization with jwt
 */
// function authorized(req, res, next) {
//   passport.authenticate('jwt', { session: false, }, async (error, token) => {
//       if (error || !token) {
//           response.status(401).json({ message: 'Unauthorized' });
//       } 
//       try {
//           const user = await User.findOne({
//               where: { id: token.id },
//           });
//           request.user = user;
//       } catch (error) {
//           next(error);
//       }
//       next();
//   })(req, res, next);   
// }
