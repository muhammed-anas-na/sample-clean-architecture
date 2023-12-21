const express = require('express')
const authController = require('../controller/authController');
const authMiddleware = require('../middleware/authMiddleware');
const asyncHandler = require('express-async-handler')

const app = express();

app.post('/signup' , authController.signup);
app.post('/login' , authController.login);
app.get('/profile',authMiddleware , authController.getProfile)


module.exports = app;