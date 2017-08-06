// @flow

import 'isomorphic-fetch';

import { createAction } from 'redux-actions';
import { TRAILERS_PAGE_ROUTE } from '../routes';

export const TRAILERS_GET_ASYNC_REQUEST = 'TRAILERS_GET_ASYNC_REQUEST';
export const TRAILERS_GET_ASYNC_SUCCESS = 'TRAILERS_GET_ASYNC_SUCCESS';
export const TRAILERS_GET_ASYNC_SUCCESS_STATUS = 'TRAILERS_GET_ASYNC_SUCCESS_STATUS';
export const TRAILERS_GET_ASYNC_FAILURE = 'TRAILERS_GET_ASYNC_FAILURE';

export const trailersGetAsyncRequest = createAction(TRAILERS_GET_ASYNC_REQUEST);
export const trailersGetAsyncSuccess = createAction(TRAILERS_GET_ASYNC_SUCCESS);
export const trailersGetAsyncSuccessStatus = createAction(TRAILERS_GET_ASYNC_SUCCESS_STATUS);
export const trailersGetAsyncFailure = createAction(TRAILERS_GET_ASYNC_FAILURE);

export const trailersGetAsync = () => (dispatch: Function) => {
    dispatch(trailersGetAsyncRequest());
    return fetch(TRAILERS_PAGE_ROUTE, { method: 'GET' })
        .then((res) => {
            if (!res.ok) throw Error(res.statusText);
            return res.json();
        })
        .then((data) => {
            if (!data) throw Error('No message received');
            dispatch(trailersGetAsyncSuccess(data));
            dispatch(trailersGetAsyncSuccessStatus());
        })
        .catch(() => {
            dispatch(trailersGetAsyncFailure());
        });
};
