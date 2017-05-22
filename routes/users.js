const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

//Register
router.post('/register', (request, response, next) => {
    let newUser = new User({
        name: request.body.name,
        email: request.body.email,
        username: request.body.username,
        password: request.body.password
    });
    User.addUser(newUser, (err, user) => {
        if (err){
            response.json({success: false, msg: 'Failed to register user'});
        }else{
            response.json({success: true, msg: 'User registered'});
        }
    });
});

//auth
router.post('/authenticate', (request, response, next) => {
    const username = request.body.username;
    const password = request.body.password;

    User.getUserByUsername(username, (err, user) => {
        if(err) throw err;
        if(!user){
            return response.json({success: false, msg: 'User not found'});
        }
        
        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign(user, config.secret, {expiresIn: 604800}); // 1 week
                response.json({
                    success: true,
                    token: 'JWT '+ token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                });
            } else{
                response.json({
                    success: false,
                    msg: 'Wrong Password'
                })
            }
        });
    });
});

//profile
router.get('/profile', (request, response, next) => {response.send('PROFILE')});

module.exports = router;