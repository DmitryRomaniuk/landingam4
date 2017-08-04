import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { STATIC_PATH } from '../shared/config';
import './db/db';
import routing from './routing';

const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.text({ type: 'text/html' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(STATIC_PATH, express.static('public'));
app.use(STATIC_PATH, express.static('dist'));

// app.use('/', indexRoute);
// app.use('/users', users);


routing(app);

module.exports = app;
