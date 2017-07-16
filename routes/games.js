const express = require('express');
const router = express.Router();
const games = require('../db/games');

/* GET games listing. */
router.get('/', function(req, res, next) {
  games.then(gamesList => {
    const arr = gamesList.map(elem => {
      const game = Object.assign({}, elem.toJSON());
      delete game._id;
      return game;
    });
    res.send(arr);
  });
  // next();
});

/* Save new game */
router.post('/', function(req, res, next) {
  console.log('Post request');
  console.log(req.body);
  res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
  res.append('Warning', '199 Miscellaneous warning');
  res.cookie('some_cross_domain_cookie', 'http://mysubdomain.example.com',{domain:'example.com', encode: String});
  res.status(200).send('game saved');
  res.end();
  // next();
});

/* Update game */
router.put('/:gameId', function(req, res, next) {
  console.log('delete request');
  console.log('Request Id:', req.params.gameId);
  console.log(req.body);
  res.status(200).send('game updated');
  // next();
});

/* Delete game */
router.delete('/:gameId', function(req, res, next) {
  console.log('delete request');
  console.log('Request Id:', req.params.gameId);
  console.log(req.body);
  res.status(200).send('game deleted');
  // next();
});

module.exports = router;
