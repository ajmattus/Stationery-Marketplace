const router = require("express").Router()
const bodyParser = require('body-parser');
const Users = require('../server/models/Users.js')

router.use(bodyParser.json())

// REGISTER
router.post("/register", async (req, res, next) => {

  const newUser = new Users({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })

  try {
    const savedUser = await Users.insertMany([newUser])
    return next()
  } catch (error) {
    res.status(500).json(error)
    next(error)
  }

})

module.exports = router