const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const users = require('./routes/users');
const dbConfig = require('./config/database')

//DB Connect and On Connection
mongoose.connect(dbConfig.database);
mongoose.connection.on('connected', () => {console.log('Connected to database '+ dbConfig.database)});
mongoose.connection.on('error', (err) => {console.log('Database error'+ err)});

//Using expressjs
const app = express();

//Port of server
const port = 3000;

//Using CORS to allow differents domains
app.use(cors());

//Body Parser
app.use(bodyParser.json());

//Passport
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use(express.static(path.join(__dirname, 'public')));

//Index
app.get('/', (request, response) => {
	response.send('Invalid Path');
});

//Satar server
app.listen(port, () => {
	console.log("Server started on port " + port);
});