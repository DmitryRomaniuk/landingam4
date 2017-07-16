const express = require('express');
const router = express.Router();
const trailers = require('../db/trailers');

/* GET trailers listing. */
router.get('/', function(req, res, next) {
  trailers.then(trailersList => {
    const arr = trailersList.map(elem => {
      const trailer = Object.assign({}, elem.toJSON());
      delete trailer._id;
      return trailer;
    });
    res.send(arr);
  });
  // next();
});

/* Save new trailer */
router.post('/', function(req, res, next) {
  console.log('Post request');
  console.log(req.body);
  res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
  res.append('Warning', '199 Miscellaneous warning');
  res.cookie('some_cross_domain_cookie', 'http://mysubdomain.example.com',{domain:'example.com', encode: String});
  res.status(200).send('trailer saved');
  res.end();
  // next();
});

/* Update trailer */
router.put('/:trailerId', function(req, res, next) {
  console.log('delete request');
  console.log('Request Id:', req.params.trailerId);
  console.log(req.body);
  res.status(200).send('trailer updated');
  // next();
});

/* Delete trailer */
router.delete('/:trailerId', function(req, res, next) {
  console.log('delete request');
  console.log('Request Id:', req.params.trailerId);
  console.log(req.body);
  res.status(200).send('trailer deleted');
  // next();
});

module.exports = router;

