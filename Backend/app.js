const express = require('express')
const app = express()
const port = 8000
const mongoose = require('mongoose')
app.use(express.json())


mongoose.connect('mongodb://localhost:27017/BlogApi').then(() => {
    console.log("hello world");
})



app.use('/', require('./Routes/user.api'))
app.use('/', require('./Routes/news.api'))



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))