const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const lessMiddleware = require('less-middleware');

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
const databaseUri = 'mongodb://heroku_6q05xjb0:aeamao92plaq974hja2nbhdhs5@ds145292.mlab.com:45292/heroku_6q05xjb0';
mongoose.connect(databaseUri, { useMongoClient: true })
      .then(() => console.log(`Database connected at ${databaseUri}`))
      .catch(err => console.log(`Database connection error: ${err.message}`));

const articles = new Schema({
    title: { type: String },
    description: { type: String },
    text: { type: String },
    avatarUrl: { type: String },
    likes: { type: Number },
    comments: { type: String },
    date: { type: Date },
    author: { type: String },
}, { collection: 'articles' });

const games = new Schema({
    title: { type: String },
    description: { type: String },
    imgUrl: { type: String },
    platforms: { type: Array },
    likes: { type: Number },
    comments: { type: String },
    rating: { type: Number },
}, { collection: 'games' });

const news = new Schema({
    title: { type: String },
    description: { type: String },
    imgUrl: { type: String },
}, { collection: 'news' });

const trailers = new Schema({
    title: { type: String },
    description: { type: String },
    imgUrl: { type: String },
}, { collection: 'trailers' });

const myArticles = mongoose.model('myArticles', articles);
const myGames = mongoose.model('myGames', games);
const myNews = mongoose.model('myNews', news);
const myTrailers = mongoose.model('myTrailers', trailers);
myArticles.find({})
  .then(function (articles) {
      console.log(articles) // Space Ghost is a talk show host.
  })
  .catch(err => console.log(`Error in myArticles model: ${err}`));
myGames.find({})
  .then(function (articles) {
      console.log(articles) // Space Ghost is a talk show host.
  })
  .catch(err => console.log(`Error in myArticles model: ${err}`));
myNews.find({})
  .then(function (articles) {
      console.log(articles) // Space Ghost is a talk show host.
  })
  .catch(err => console.log(`Error in myArticles model: ${err}`));
myTrailers.find({})
  .then(function (articles) {
      console.log(articles) // Space Ghost is a talk show host.
  })
  .catch(err => console.log(`Error in myArticles model: ${err}`));

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
});

module.exports = app;
