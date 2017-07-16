const express = require('express');
const router = express.Router();
const articles = require('../db/articles');

/* GET articles listing. */
router.get('/', function(req, res, next) {
  articles.then(articlesList => {
    const arr = articlesList.map(elem => {
      const article = Object.assign({}, elem.toJSON());
      delete article._id;
      return article;
    });
    res.send(arr);
  });
  // next();
});

/* Save new article */
router.post('/', function(req, res, next) {
  console.log('Post request');
  console.log(req.body);
  res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
  res.append('Warning', '199 Miscellaneous warning');
  res.cookie('some_cross_domain_cookie', 'http://mysubdomain.example.com',{domain:'example.com', encode: String});
  res.status(200).send('article saved');
  res.end();
  // next();
});

/* Update article */
router.put('/:articleId', function(req, res, next) {
  console.log('delete request');
  console.log('Request Id:', req.params.articleId);
  console.log(req.body);
  res.status(200).send('article updated');
  // next();
});

/* Delete article */
router.delete('/:articleId', function(req, res, next) {
  console.log('delete request');
  console.log('Request Id:', req.params.articleId);
  console.log(req.body);
  res.status(200).send('article deleted');
  // next();
});

// helloEndpoint = (num) => ({
//     serverMessage: `Hello from the server! (received ${num})`,
// });

// router.get('/:articleId', function (req, res, next) {
//     res.json(helloEndpoint(req.params.articleId));
//     console.log('Request Id:', req.params.articleId);
//     next();
// });

module.exports = router;
