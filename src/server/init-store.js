// @flow

import Immutable from 'immutable';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as reduxFormReducer } from 'redux-form';

import helloReducer from '../shared/reducer/hello';
import articlesReducer from '../shared/reducer/articles';

const initStore = (plainPartialState: ?Object) => {
    const preloadedState = plainPartialState ? {} : undefined;

    if (plainPartialState && plainPartialState.hello) {
    // flow-disable-next-line
        preloadedState.hello = helloReducer(undefined, {})
      .merge(Immutable.fromJS(plainPartialState.hello));
    }

    if (plainPartialState && plainPartialState.articles) {
      // flow-disable-next-line
        preloadedState.articles = articlesReducer(undefined, {})
          .merge(Immutable.fromJS(plainPartialState.articles));
    }

    return createStore(combineReducers({ hello: helloReducer, articles: articlesReducer, form: reduxFormReducer }),
    preloadedState, applyMiddleware(thunkMiddleware));
};

export default initStore;
