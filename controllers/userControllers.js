const express = require('express');
const app = express();
const path = require('path');

const Products = require('../server/models/Products');

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

  add: async function (req, res, next) {
    console.log(req);
    const { color, tip, ink } = req.body;

    try {
      const db = client.db('marketplace')
      const collection = db.collection('products')
      const product = await Products.create({ color, tip, ink });
      // console.log(product, 'these are the products shown in the terminal');
      return next();
    } catch (error) {
      console.log(error);
      return next('error');
    }
  },

  find: async function (req, res, next) {
    try {
      const product = await Products.create({ color: "blue" });
      const other = await Products.find()
      console.log(product, 'these are the products shown in the terminal');
      console.log(other, 'this is other');
      return next();
    } catch (error) {
      console.log(error);
      return next('error');
    }
  },

  // Go to Favorites

  // Go to certain categories

  // Go to Profile (this will require req.params)

  // Go to settings

  // Go to About Us
};

module.exports = userController;
