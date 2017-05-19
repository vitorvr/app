const express = require('express');
const router = express.Router();

//Add
router.get('/add', (request, response, next) => {response.send('Add')});
//Select
router.get('/select', (request, response, next) => {response.send('Add')});
//SelectAll
router.get('/selectAll', (request, response, next) => {response.send('Add')});

module.exports = router;