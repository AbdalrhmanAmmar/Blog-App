const { Addnews } = require('../services/news.service');

const app = require('express').Router();

app.post('/Addnews', Addnews)

module.exports = app