const users = require('express').Router(); // eslint-disable-line new-cap

users.get('/', function (req, res, next) { /* etc */});
users.post('/', function (req, res, next) { /* etc */});
users.put('/:userId', function (req, res, next) { /* etc */});
users.delete('/:userId', function (req, res, next) { /* etc */});

module.exports = users;
