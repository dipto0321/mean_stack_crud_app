const http = require('http');
const express = require('express');
const mongo = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const appRoutes = require('./routes/appRoutes');

const port = process.env.PORT || 4000;
const app = express();

//Cors
app.use(cors());
//Body Parser Setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes Setup
app.use('/', appRoutes);


mongo.connect('mongodb://localhost:27017/meanDB');

http.createServer(app).listen(port, () => {
    console.log(`Backend Server Activated at ${port}`);
});