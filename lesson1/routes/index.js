const routes = require('express').Router();

const display = require('../controllers/index.js');

routes.get('/', (req, res) => {
    res.send(display.displayName())
})

module.exports = routes;