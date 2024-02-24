const express = require('express')
const router = express.Router()

const blogsController = require('../controllers/blogsController')

router.get('/', blogsController.cateforiesList)
router.get('/:id', blogsController.categoryDetail)

module.exports = router