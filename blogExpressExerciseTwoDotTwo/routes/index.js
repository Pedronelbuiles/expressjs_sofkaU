const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('home')
})

router.use('/articles', require('./articles'))
router.use('/categories', require('./categories'))

module.exports = router