const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const lessMiddleware = require('less-middleware');
const index = require('./routes/index');
const users = require('./routes/users');
require('./db/db');
const articlesRoute = require('./routes/articles');
const trailersRoute = require('./routes/trailers');
const newsRoute = require('./routes/news');
const gamesRoute = require('./routes/games');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'src'), {dest: path.join(__dirname, 'public')}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/articles', articlesRoute);
app.use('/trailers', trailersRoute);
app.use('/news', newsRoute);
app.use('/games', gamesRoute);
app.use('/users', users);

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
