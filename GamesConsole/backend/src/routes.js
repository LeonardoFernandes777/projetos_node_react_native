const express = require('express');
const routes = express.Router();
const GamesController = require('./controllers/GameController');


routes.post('/Games', GamesController.store);

module.exports = routes;
