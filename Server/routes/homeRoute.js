const express = require('express')
const homeController = require('../controllers/homeController')
const router = express.Router()

router.put('/props', homeController.upDateProps)

router.get('/', homeController.getAll)

module.exports = router
