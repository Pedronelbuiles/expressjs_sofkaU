const express = require('express')
const router = express.Router()

router.get('/products', (req, res) => {
    res.send('Product list')
})

router.get('/products/:id', (req, res) => {
    const productId = req.params.id
    res.send(`Details of ${productId} product`)
})

module.exports = router