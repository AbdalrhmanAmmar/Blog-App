const { auth } = require('../middleware/Authentication/Auth');
const { Addnews, getnews, usernews, Update, deletenwes } = require('../services/news.service');

const app = require('express').Router();

app.post('/Addnews',auth, Addnews)
app.get('/getnews',auth, getnews)
app.get('/usernews',auth, usernews)
app.put('/update',auth, Update)
app.delete('/delete',auth,deletenwes )

module.exports = app