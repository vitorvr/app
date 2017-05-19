const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

//Using expressjs
const app = express();

//Port of server
const port = 3000;

//Using CORS to allow differents domains
app.use(cors());

//Body Parser
app.use(bodyParser.json());

//Index
app.get('/', (request, response) => {
	response.send('Invalid Path');
});

//Satar server
app.listen(port, () => {
	console.log("Server started on port " + port);
});