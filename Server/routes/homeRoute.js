const express = require('express')
const homeController = require('../controllers/homeController')
const router = express.Router()

router.put('/props', homeController.upDateProps)
router.post('/post', homeController.createPost)
router.put('/post', homeController.upDatePost)

router.get('/', homeController.getAll)

module.exports = router
