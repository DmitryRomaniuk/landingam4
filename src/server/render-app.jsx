// @flow

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Helmet from 'react-helmet';
import {SheetsRegistry, SheetsRegistryProvider} from 'react-jss';
import {Provider} from 'react-redux';
import {StaticRouter} from 'react-router';

import initStore from './init-store';
import App from '../shared/app';
import {APP_CONTAINER_CLASS, JSS_SSR_CLASS, STATIC_PATH, WDS_PORT} from '../shared/config';
import {isProd} from '../shared/util';

const renderApp = (location: string, plainPartialState: ?Object, routerContext: ?Object = {}) => {
    const store = initStore(plainPartialState);
    const sheets = new SheetsRegistry();
    const appHtml = ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter location={location} context={routerContext}>
                <SheetsRegistryProvider registry={sheets}>
                    <App/>
                </SheetsRegistryProvider>
            </StaticRouter>
        </Provider>);
    const head = Helmet.rewind();

    return (
        `<!doctype html>
    <html>
      <head>
        ${head.title}
        ${head.meta}
        <link rel="icon" href="${STATIC_PATH}/favicon.ico" type="image/x-icon">
        <style class="${JSS_SSR_CLASS}">${sheets.toString()}</style>
        <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
      </head>
      <body>
        <div class="${APP_CONTAINER_CLASS}">${appHtml}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState())}
        </script>
        <script src="${isProd ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`}/js/bundle.js"></script>
      </body>
    </html>`
    );
};

export default renderApp;
