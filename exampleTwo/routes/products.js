const express = require('express')
const router = express.Router()

const productsController = require('../controllers/productsController')

router.get('/', productsController.productsList)
router.get('/:id', productsController.productDetail)

module.exports = router