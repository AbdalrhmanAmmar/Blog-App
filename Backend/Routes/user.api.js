const { Signup } = require("../services/user.service");

const app = require('express').Router();

app.post('/Signup', Signup)

module.exports = app