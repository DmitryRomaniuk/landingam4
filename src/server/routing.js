// @flow


import articlesRoute from './routes/articles';
import trailersRoute from './routes/trailers';
import newsRoute from './routes/news';
import gamesRoute from './routes/games';
import homePage from './controller';

import {
    HOME_PAGE_ROUTE,
    LOGIN_ROUTE,
} from '../shared/routes';

import renderApp from './render-app';

export default (app: Object) => {
    app.get(HOME_PAGE_ROUTE, (req, res) => {
        res.send(renderApp(req.url, homePage()));
    });

    app.use('/articles', articlesRoute);
    app.use('/trailers', trailersRoute);
    app.use('/news', newsRoute);
    app.use('/games', gamesRoute);

    app.get(LOGIN_ROUTE, (req, res) => {
        res.send(renderApp(req.url));
    });

    app.post(LOGIN_ROUTE, (req, res) => {
        res.redirect(HOME_PAGE_ROUTE);
    });

    // eslint-disable-next-line no-unused-vars
    app.use((err, req, res, next) => {
        // eslint-disable-next-line no-console
        console.error(err.stack);
        res.status(500).send('Something went wrong!');
    });

    // catch 404 and forward to error handler
    app.get('*', (req, res) => {
        res.status(404).send(renderApp(req.url));
    });

    // eslint-disable-next-line no-unused-vars
    app.use((err, req, res, next) => {
        /* eslint-enable no-unused-vars */
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};
        // render the error page
        res.status(err.status || 500);
        res.render('error');
    });
};
