var createError = require('http-errors');
var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');

var logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

mongoose.connect(process.env.DB_CONNECTION, {
  "useNewUrlParser": true,
  "useUnifiedTopology": true,
  "useCreateIndex": true,
  "useFindAndModify": true
},() => console.log('connected to DB'));

app.use(logger('dev'));
app.use(express.json()); //send json post request
app.use(express.urlencoded({ extended: true })); //wbudowany bodyparser -> true
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./routes/index.routes'));
app.use(require('./routes/users.routes'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;