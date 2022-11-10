const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log('hi')
    res.send('HI')
})

app.listen(3000)