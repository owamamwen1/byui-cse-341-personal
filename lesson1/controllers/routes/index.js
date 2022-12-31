const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Eron Whitefield');
});

module.exports = routes;