const express = require('express');
const app = express();
const path = require('path');

const userController = require('../controllers/userControllers');

const connectDB = require('./connectDB');

connectDB();

app.get('/water', userController.sayHello, (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index2.html'));
});

app.post(
  '/soda',
  (req, res) => {
    const sodaData = {
      color: 'blue',
      tip: 'needle',
      ink: 'gel',
    };
  },
  userController.add,
  (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index2.html'));
  }
);

app.get('/soda', userController.find, (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index2.html'));
});

// app.get('/pink', (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, '../index2.html'));
// });

// serve index.html on the route '/'
app.get('/#', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

// Unknown route handler for everything that doesn't have a valid endpoint
app.get('*', (req, res) => {
  res.status(404).send(`Not Found`);
});

// Global error handler that ONLY gets triggered in the middleware chain
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000); //listens on port 3000 -> http://localhost:3000/
