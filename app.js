const express = require('express');
<<<<<<< HEAD
var helmet = require('helmet');
=======
>>>>>>> master
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const lessMiddleware = require('less-middleware');
<<<<<<< HEAD
require('./db/db');
const articlesRoute = require('./routes/articles');
const trailersRoute = require('./routes/trailers');
const newsRoute = require('./routes/news');
const gamesRoute = require('./routes/games');
const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(helmet());
app.disable('x-powered-by');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.text({ type: 'text/html' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'src'), {dest: path.join(__dirname, 'public')}));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', index);
app.use('/articles', articlesRoute);
app.use('/trailers', trailersRoute);
app.use('/news', newsRoute);
app.use('/games', gamesRoute);
// app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
/* eslint-disable no-unused-vars */
app.use(function(err, req, res, next) {
    /* eslint-enable no-unused-vars */
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
=======

const index = require('./routes/index');
const users = require('./routes/users');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
console.log(path.join(__dirname, 'src/styles'));
console.log(path.join(__dirname, 'public/css'));
app.use(lessMiddleware(path.join(__dirname, 'src'), {dest: path.join(__dirname, 'public')}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

mongoose.Promise = global.Promise;
const uri = 'mongodb://heroku_6q05xjb0:aeamao92plaq974hja2nbhdhs5@ds145292.mlab.com:45292/heroku_6q05xjb0';
const mongoConnect = mongoose.createConnection(uri,{
    useMongoClient: true,
});

const articles = new Schema({
    title: { type: String },
    description: { type: String },
    text: { type: String },
    avatarUrl: { type: String },
    likes: { type: Number },
    comments: { type: String },
    date: { type: Number },
    author: { type: String }
}, { collection: 'articles' });

const myArticles = mongoose.model('myArticles', articles);
mongoConnect.then(db => {
  console.log(`DB connected`);
  myArticles.find({}, function (err, person) {
      if (err) return console.log(err);
      console.log(person) // Space Ghost is a talk show host.
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
>>>>>>> master
});

module.exports = app;
