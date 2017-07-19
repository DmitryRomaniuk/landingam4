const express = require('express');
const router = express.Router();
const trailers = require('../db/trailers');

/* GET trailers listing. */
router.get('/', function (req, res) {
    trailers.find({}, null, {lean: true}).then(trailersList => {
        const arr = trailersList.map(elem => {
            let trailer = Object.assign({}, elem);
            delete trailer._id;
            return trailer;
        });
        res.send(arr);
    }).catch(err => console.log(`Error in myTrailers model: ${err}`));
});

/* Save new trailer */
router.post('/', function (req, res) {
    console.log('Post request');
    console.log(req.body);
    res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
    res.append('Warning', '199 Miscellaneous warning');
    res.cookie('some_cross_domain_cookie', 'http://mysubdomain.example.com', {domain: 'example.com', encode: String});
    res.status(200).send('trailer saved');
    res.end();
});

/* Update trailer */
router.put('/:trailerId', function (req, res) {
    console.log('delete request');
    console.log('Request Id:', req.params.trailerId);
    console.log(req.body);
    res.status(200).send('trailer updated');
});

/* Delete trailer */
router.delete('/:trailerId', function (req, res) {
    console.log('delete request');
    console.log('Request Id:', req.params.trailerId);
    console.log(req.body);
    res.status(200).send('trailer deleted');
});

module.exports = router;

