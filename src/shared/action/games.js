// @flow

import 'isomorphic-fetch';

import { createAction } from 'redux-actions';
import { GAMES_PAGE_ROUTE } from '../routes';

export const GAMES_GET_ASYNC_REQUEST = 'GAMES_GET_ASYNC_REQUEST';
export const GAMES_GET_ASYNC_SUCCESS = 'GAMES_GET_ASYNC_SUCCESS';
export const GAMES_GET_ASYNC_SUCCESS_STATUS = 'GAMES_GET_ASYNC_SUCCESS_STATUS';
export const GAMES_GET_ASYNC_FAILURE = 'GAMES_GET_ASYNC_FAILURE';

export const gameGetAsyncRequest = createAction(GAMES_GET_ASYNC_REQUEST);
export const gameGetAsyncSuccess = createAction(GAMES_GET_ASYNC_SUCCESS);
export const gameGetAsyncSuccessStatus = createAction(GAMES_GET_ASYNC_SUCCESS_STATUS);
export const gameGetAsyncFailure = createAction(GAMES_GET_ASYNC_FAILURE);

export const gamesGetAsync = () => (dispatch: Function) => {
    dispatch(gameGetAsyncRequest());
    return fetch(GAMES_PAGE_ROUTE, { method: 'GET' })
        .then((res) => {
            if (!res.ok) throw Error(res.statusText);
            return res.json();
        })
        .then((data) => {
            if (!data) throw Error('No message received');
            dispatch(gameGetAsyncSuccess(data));
            dispatch(gameGetAsyncSuccessStatus());
        })
        .catch(() => {
            dispatch(gameGetAsyncFailure());
        });
};
