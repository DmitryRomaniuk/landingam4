// @flow

import 'isomorphic-fetch';

import { createAction } from 'redux-actions';
import { NEWS_PAGE_ROUTE } from '../routes';

export const NEWS_GET_ASYNC_REQUEST = 'NEWS_GET_ASYNC_REQUEST';
export const NEWS_GET_ASYNC_SUCCESS = 'NEWS_GET_ASYNC_SUCCESS';
export const NEWS_GET_ASYNC_SUCCESS_STATUS = 'NEWS_GET_ASYNC_SUCCESS_STATUS';
export const NEWS_GET_ASYNC_FAILURE = 'NEWS_GET_ASYNC_FAILURE';

export const newsGetAsyncRequest = createAction(NEWS_GET_ASYNC_REQUEST);
export const newsGetAsyncSuccess = createAction(NEWS_GET_ASYNC_SUCCESS);
export const newsGetAsyncSuccessStatus = createAction(NEWS_GET_ASYNC_SUCCESS_STATUS);
export const newsGetAsyncFailure = createAction(NEWS_GET_ASYNC_FAILURE);

export const newsGetAsync = () => (dispatch: Function) => {
    dispatch(newsGetAsyncRequest());
    return fetch(NEWS_PAGE_ROUTE, { method: 'GET' })
        .then((res) => {
            if (!res.ok) throw Error(res.statusText);
            return res.json();
        })
        .then((data) => {
            if (!data) throw Error('No message received');
            function sortArr(a, b) {
                if (a.imgUrl.match(/\d+/)[0] > b.imgUrl.match(/\d+/)[0]) {
                    return 1;
                }
                return -1;
            }
            const sortedData = data.sort(sortArr);
            dispatch(newsGetAsyncSuccess(sortedData));
            dispatch(newsGetAsyncSuccessStatus());
        })
        .catch(() => {
            dispatch(newsGetAsyncFailure());
        });
};
