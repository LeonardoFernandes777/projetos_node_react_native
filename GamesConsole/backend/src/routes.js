const express = require('express');
const config = require('../config')
const GameController = require('./controllers/GameController');


const routes = (express.Router());
routes.get(config.routesUrl.get, (req, res) => {
    GameController.getLog(routes, req, res);
});

module.exports = routes;
