const express = require('express');
const router = express.Router();
const news = require('../db/news');

/* GET news listing. */
router.get('/', function(req, res, next) {
  news.then(newsList => {
    const arr = newsList.map(elem => {
      const news = Object.assign({}, elem.toJSON());
      delete news._id;
      return news;
    });
    res.send(arr);
  });
  // next();
});

/* Save new news */
router.post('/', function(req, res, next) {
  console.log('Post request');
  console.log(req.body);
  res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
  res.append('Warning', '199 Miscellaneous warning');
  res.cookie('some_cross_domain_cookie', 'http://mysubdomain.example.com',{domain:'example.com', encode: String});
  res.status(200).send('news saved');
  res.end();
  // next();
});

/* Update news */
router.put('/:newsId', function(req, res, next) {
  console.log('delete request');
  console.log('Request Id:', req.params.newsId);
  console.log(req.body);
  res.status(200).send('news updated');
  // next();
});

/* Delete news */
router.delete('/:newsId', function(req, res, next) {
  console.log('delete request');
  console.log('Request Id:', req.params.newsId);
  console.log(req.body);
  res.status(200).send('news deleted');
  // next();
});

module.exports = router;