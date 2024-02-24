const express = require('express')
const router = express.Router()

const articlesController = require('../controllers/articlesController')

router.get('/', articlesController.articlesList)
router.get('/:id', articlesController.articleDetail)

module.exports = router