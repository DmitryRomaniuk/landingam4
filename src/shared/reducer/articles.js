// @flow

import Immutable from 'immutable';
import type { fromJS as Immut } from 'immutable';

import {
    ARTICLE_ADD,
    ARTICLE_EDIT,
    ARTICLE_REMOVE,
    ARTICLES_FORM_TOGGLE,
    ARTICLES_GET_ASYNC_REQUEST,
    ARTICLES_GET_ASYNC_SUCCESS,
    ARTICLES_GET_ASYNC_FAILURE,
    ARTICLES_GET_ASYNC_SUCCESS_STATUS,
} from '../action/articles';

const initialState = Immutable.fromJS({
    listArticles: [],
    status: 'empty',
    modal: false,
    number: 0,
});

const articlesReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
    case ARTICLE_ADD:
        return state.set('listArticles', state.get('listArticles').set(state.get('number'), Immutable.fromJS(action.payload)));
    case ARTICLES_FORM_TOGGLE:
        return state.set('modal', !state.get('modal'));
    case ARTICLE_EDIT:
        return state.set('number', action.payload);
    case ARTICLE_REMOVE:
        return state.set('listArticles', state.get('listArticles').delete(action.payload));
    case ARTICLES_GET_ASYNC_REQUEST:
        return state.set('status', 'Loading...');
    case ARTICLES_GET_ASYNC_SUCCESS_STATUS:
        return state.set('status', 'Loaded');
    case ARTICLES_GET_ASYNC_SUCCESS:
        return state.set('listArticles', Immutable.fromJS(action.payload));
    case ARTICLES_GET_ASYNC_FAILURE:
        return state.set('status', 'No message received, please check your connection');
    default:
        return state;
    }
};

export default articlesReducer;
