const express = require('express');
const router = express.Router();
const articles = require('../db/articles');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(articles);
  res.send(articles);
});

helloEndpointRoute = (num) => `/${num || ':num'}`;
helloEndpoint = (num) => ({
    serverMessage: `Hello from the server! (received ${num})`,
});

router.get(helloEndpointRoute(), function (req, res, next) {
    res.json(helloEndpoint(req.params.num));
    console.log('Request Id:', req.params.id);
    next();
});

module.exports = router;
