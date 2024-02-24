const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use((req, res) => {
    res.status(404).render('error', { message: 'Page not found' })
})

app.listen(port, () => {
    console.log(`Server listening in port ${port}`)
})