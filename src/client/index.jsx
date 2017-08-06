// @flow

import 'babel-polyfill';

import Immutable from 'immutable';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import Tether from 'tether';
import { reducer as reduxFormReducer } from 'redux-form';
import 'bootstrap';
import './css/style.less';

import App from '../shared/app';
import { APP_CONTAINER_SELECTOR, JSS_SSR_SELECTOR } from '../shared/config';
import helloReducer from '../shared/reducer/hello';
import articlesReducer from '../shared/reducer/articles';
import gamesReducer from '../shared/reducer/games';
import trailersReducer from '../shared/reducer/trailers';
import newsReducer from '../shared/reducer/news';
import { isProd } from '../shared/util';

window.Tether = Tether;
/* eslint-disable no-underscore-dangle */
const composeEnhancers = (isProd ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const preloadedState = window.__PRELOADED_STATE__;
/* eslint-enable no-underscore-dangle */

const store = createStore(combineReducers(
    {
        hello: helloReducer,
        articles: articlesReducer,
        games: gamesReducer,
        news: newsReducer,
        trailers: trailersReducer,
        form: reduxFormReducer,
    }),
    {
        hello: Immutable.fromJS(preloadedState.hello),
        articles: Immutable.fromJS(preloadedState.articles),
        games: Immutable.fromJS(preloadedState.games),
        news: Immutable.fromJS(preloadedState.news),
        trailers: Immutable.fromJS(preloadedState.trailers),
    },
    composeEnhancers(applyMiddleware(thunkMiddleware)));

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR);

const wrapApp = (AppComponent, reduxStore) =>
  <Provider store={reduxStore}>
    <BrowserRouter>
      <AppContainer>
        <AppComponent />
      </AppContainer>
    </BrowserRouter>
  </Provider>;

ReactDOM.render(wrapApp(App, store), rootEl);

if (module.hot) {
    // flow-disable-next-line
    module.hot.accept('../shared/app', () => {
        // eslint-disable-next-line global-require
        const NextApp = require('../shared/app').default;
        ReactDOM.render(wrapApp(NextApp, store), rootEl);
    });
}

const jssServerSide = document.querySelector(JSS_SSR_SELECTOR);
// flow-disable-next-line
jssServerSide.parentNode.removeChild(jssServerSide);
