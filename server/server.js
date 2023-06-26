const express = require('express');
const app = express();
const path = require('path');

const userController = require('../controllers/userControllers');

app.get('/water', userController.sayHello, (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index2.html'));
});

// statically serve everything in the build folder on the route '/build'
// app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
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
