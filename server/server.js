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

app.get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')));

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.listen(1337, function () {
  console.log('Your server, listening on port 1337');
});
