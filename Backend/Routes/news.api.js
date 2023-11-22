const { Addnews, getnews } = require('../services/news.service');

const app = require('express').Router();

app.post('/Addnews', Addnews)
app.get('/getnews', getnews)

module.exports = app