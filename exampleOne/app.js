const express = require('express')
const app= express()

// Config of root route

// example GET query
app.get('/', (req, res) => {
    res.send('Home page')
})

app.get('/about', (req, res) => {
    res.send('About us')
})

app.get('/contact', (req, res) => {
    res.send('Contact page')
})

//example POST query
app.post('/new', (req, res) => {
    res.send('Creating new element')
})

app.get('/user/:id', (req, res) => {
    const userId = req.params.id
    res.send(`Details of user with ID ${userId}`)
})

app.get('/search/:q', (req, res) => {
    const searchTerm = req.params.q
    res.send(`Details of search to ${searchTerm}`)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Express server working in port ${port}`)
})