const express = require('express')
const router = express.Router()

const categoriesController = require('../controllers/categoriesController')

router.get('/', categoriesController.cateforiesList)
router.get('/:id', categoriesController.categoryDetail)

module.exports = router