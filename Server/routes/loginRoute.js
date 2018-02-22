const express = require('express')
const loginController = require('../controllers/loginController')
const router = express.Router()

router.post('/signUp', loginController.signUp)

module.exports = router
