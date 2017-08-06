// @flow

import Immutable from 'immutable';
import type { fromJS as Immut } from 'immutable';

import {
    GAMES_GET_ASYNC_REQUEST,
    GAMES_GET_ASYNC_SUCCESS,
    GAMES_GET_ASYNC_FAILURE,
    GAMES_GET_ASYNC_SUCCESS_STATUS,
} from '../action/games';

const initialState = Immutable.fromJS({
    listGames: [
        {
            title: '',
            description: '',
            imgUrl: '',
            platforms: ['', '', ''],
            likes: 0,
            comments: 0,
            rating: 0,
        },
    ],
    status: 'empty',
});

const gamesReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
    case GAMES_GET_ASYNC_REQUEST:
        return state.set('status', 'Loading...');
    case GAMES_GET_ASYNC_SUCCESS_STATUS:
        return state.set('status', 'Loaded');
    case GAMES_GET_ASYNC_SUCCESS:
        return state.set('listGames', Immutable.fromJS(action.payload));
    case GAMES_GET_ASYNC_FAILURE:
        return state.set('status', 'No message received, please check your connection');
    default:
        return state;
    }
};

export default gamesReducer;
