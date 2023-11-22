const { Addnews, getnews, usernews, Update, deletenwes } = require('../services/news.service');

const app = require('express').Router();

app.post('/Addnews', Addnews)
app.get('/getnews', getnews)
app.get('/usernews', usernews)
app.put('/update', Update)
app.delete('/delete',deletenwes )

module.exports = app