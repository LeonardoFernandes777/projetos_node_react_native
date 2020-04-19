const express = require('express');
const routes = express.Router();
const GamesController = require('./controllers/GameController')

const Config = {
  validation: {
    'showValidation': true,
    'enableLocalLog': true,
  },
}
routes.post('/Games', GamesController.store)

module.exports = routes
module.exports = Config;