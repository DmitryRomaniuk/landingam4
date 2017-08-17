// @flow

import Immutable from 'immutable';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as reduxFormReducer } from 'redux-form';

import articlesReducer from '../shared/reducer/articles';
import gamesReducer from '../shared/reducer/games';
import newsReducer from '../shared/reducer/news';
import trailersReducer from '../shared/reducer/trailers';

const initStore = (plainPartialState: ?Object) => {
    const preloadedState = plainPartialState ? {} : undefined;

    if (plainPartialState && plainPartialState.articles) {
        // flow-disable-next-line
        preloadedState.articles = articlesReducer(undefined, {})
            .merge(Immutable.fromJS(plainPartialState.articles));
    }

    if (plainPartialState && plainPartialState.games) {
        // flow-disable-next-line
        preloadedState.games = articlesReducer(undefined, {})
            .merge(Immutable.fromJS(plainPartialState.games));
    }

    if (plainPartialState && plainPartialState.news) {
        // flow-disable-next-line
        preloadedState.news = articlesReducer(undefined, {})
            .merge(Immutable.fromJS(plainPartialState.news));
    }

    if (plainPartialState && plainPartialState.trailers) {
        // flow-disable-next-line
        preloadedState.trailers = articlesReducer(undefined, {})
            .merge(Immutable.fromJS(plainPartialState.trailers));
    }

    return createStore(combineReducers({
        articles: articlesReducer,
        games: gamesReducer,
        news: newsReducer,
        trailers: trailersReducer,
        form: reduxFormReducer,
    }),
    preloadedState, applyMiddleware(thunkMiddleware));
};

export default initStore;
