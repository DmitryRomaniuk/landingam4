// @flow

import Immutable from 'immutable';
import type { fromJS as Immut } from 'immutable';

import {
    TRAILERS_GET_ASYNC_REQUEST,
    TRAILERS_GET_ASYNC_SUCCESS,
    TRAILERS_GET_ASYNC_FAILURE,
    TRAILERS_GET_ASYNC_SUCCESS_STATUS,
} from '../action/trailers';

const initialState = Immutable.fromJS({
    listTrailers: [
        {
            title: '',
            genre: ['', ''],
            imgUrl: '',
        },
    ],
    status: 'empty',
});

const trailersReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
    case TRAILERS_GET_ASYNC_REQUEST:
        return state.set('status', 'Loading...');
    case TRAILERS_GET_ASYNC_SUCCESS_STATUS:
        return state.set('status', 'Loaded');
    case TRAILERS_GET_ASYNC_SUCCESS:
        return state.set('listTrailers', Immutable.fromJS(action.payload));
    case TRAILERS_GET_ASYNC_FAILURE:
        return state.set('status', 'No message received, please check your connection');
    default:
        return state;
    }
};

export default trailersReducer;
