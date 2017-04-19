const express = require('express');
const morgan = require('morgan');
const { resolve } = require('path');
const bodyParser = require('body-parser');

const app = express();

// middleware

app.use(bodyParser.json()); // body parsing
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev')); // logging

app.use(express.static(resolve(__dirname, '..', 'public'))); // static files

app.use('/api', require('./routes')); // matches all requests to /api
