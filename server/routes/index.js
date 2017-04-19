'use strict';

const api = require('express').Router(); // eslint-disable-line new-cap

api.use('/users', require('./users'));

// No routes matched? 404.
api.use((req, res) => res.status(404).end());

module.exports = api;
