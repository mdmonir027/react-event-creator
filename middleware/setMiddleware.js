const express = require('express');
const morgan = require('morgan');
const passport = require('passport');

const middleware = [
  morgan('dev'),
  express.urlencoded({ extended: true }),
  express.json(),
  passport.initialize(),
  passport.session(),
];

module.exports = (app) => {
  middleware.forEach((item) => {
    app.use(item);
  });
  require('./auth/passport')(passport);
};
