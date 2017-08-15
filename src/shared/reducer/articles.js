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
    modalSpinner: false,
    id: '',
});

const articlesReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
    function getPosition(state) {
        const position = state.get('listArticles').findIndex(elem => {
            return elem.get('id') === state.get('id');
        });
        return (position === -1) ? state.get('listArticles').size : position;
    }
    switch (action.type) {
    case ARTICLE_ADD:
        return state.set('listArticles', state.get('listArticles').set(getPosition(state), Immutable.fromJS(action.payload)));
    case ARTICLES_FORM_TOGGLE:
        return state.set('modal', !state.get('modal'));
    case ARTICLE_EDIT:
        return state.set('id', action.payload);
    case ARTICLE_REMOVE:
        return state.set('listArticles', state.get('listArticles').delete(state.get('listArticles').findIndex(elem => elem.get('id') === action.payload)));
    case ARTICLES_GET_ASYNC_REQUEST:
        return state.set(state.get('modalSpinner'), true);
    case ARTICLES_GET_ASYNC_SUCCESS_STATUS:
        return state.set(state.get('modalSpinner'), false);
    case ARTICLES_GET_ASYNC_SUCCESS:
        return state.set('listArticles', Immutable.fromJS(action.payload));
    case ARTICLES_GET_ASYNC_FAILURE:
        return state.set(state.get('modalSpinner'), false);
    default:
        return state;
    }
};

export default articlesReducer;
