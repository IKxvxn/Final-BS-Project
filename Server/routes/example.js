const express = require('express')

const exampleComtroller = require('../controllers/exampleController')

const router = express.Router()

router.get('/', exampleComtroller.exampleFunction)

module.exports = router
