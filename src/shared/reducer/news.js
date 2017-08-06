// @flow

import Immutable from 'immutable';
import type { fromJS as Immut } from 'immutable';

import {
    NEWS_GET_ASYNC_REQUEST,
    NEWS_GET_ASYNC_SUCCESS,
    NEWS_GET_ASYNC_FAILURE,
    NEWS_GET_ASYNC_SUCCESS_STATUS,
} from '../action/news';

const initialState = Immutable.fromJS({
    listNews: [
        { title: '', description: '', imgUrl: '' },
        { title: '', description: '', imgUrl: '' },
        { title: '', description: '', imgUrl: '' },
        { title: '', description: '', imgUrl: '' },
        { title: '', description: '', imgUrl: '' },
        { title: '', description: '', imgUrl: '' },
        { title: '', description: '', imgUrl: '' },
    ],
    status: 'empty',
});

const newsReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
    case NEWS_GET_ASYNC_REQUEST:
        return state.set('status', 'Loading...');
    case NEWS_GET_ASYNC_SUCCESS_STATUS:
        return state.set('status', 'Loaded');
    case NEWS_GET_ASYNC_SUCCESS:
        return state.set('listNews', Immutable.fromJS(action.payload));
    case NEWS_GET_ASYNC_FAILURE:
        return state.set('status', 'No message received, please check your connection');
    default:
        return state;
    }
};

export default newsReducer;
