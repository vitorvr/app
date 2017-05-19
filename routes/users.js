const express = require('express');
const router = express.Router();

//Register
router.post('/register', (request, response, next) => {response.send('REGISTER')});
//auth
router.post('/auth', (request, response, next) => {response.send('AUTHENTICATE')});
//profile
router.get('/profile', (request, response, next) => {response.send('PROFILE')});
//Validate
router.get('/validate', (request, response, next) => {response.send('VALIDATE')});

module.exports = router;