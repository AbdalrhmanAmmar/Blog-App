const { Signup, Login } = require("../services/user.service");

const app = require('express').Router();

app.post('/Signup', Signup)
app.post('/login', Login)

module.exports = app