const express = require('express');
const app = express();
const path = require('path');

const userController = {
  sayHello: function (req, res, next) {
    try {
      console.log('saying hello');
      return next();
    } catch (err) {
      return next({
        log: 'Express error handler caught sayHello middleware error',
        status: 400,
        message: { err: 'An error in sayHello middleware occurred' },
      });
    }
  },

  // Go to Favorites

  // Go to certain categories

  // Go to Profile (this will require req.params)

  // Go to settings

  // Go to About Us
};

module.exports = userController;
