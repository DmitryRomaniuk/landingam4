// @flow

import 'isomorphic-fetch';

import { createAction } from 'redux-actions';
import { ARTICLES_PAGE_ROUTE } from '../routes';

export const ARTICLE_ADD = 'ARTICLE_ADD';
export const ARTICLE_EDIT = 'ARTICLE_EDIT';
export const ARTICLE_REMOVE = 'ARTICLE_REMOVE';
export const ARTICLES_GET = 'ARTICLES_GET';
export const ARTICLES_GET_ASYNC_REQUEST = 'ARTICLES_GET_ASYNC_REQUEST';
export const ARTICLES_GET_ASYNC_SUCCESS = 'ARTICLES_GET_ASYNC_SUCCESS';
export const ARTICLES_GET_ASYNC_SUCCESS_STATUS = 'ARTICLES_GET_ASYNC_SUCCESS_STATUS';
export const ARTICLES_GET_ASYNC_FAILURE = 'ARTICLES_GET_ASYNC_FAILURE';

export const articleAddAction = createAction(ARTICLE_ADD);
export const articleEdit = createAction(ARTICLE_EDIT);
export const articleRemove = createAction(ARTICLE_REMOVE);
export const articleGet = createAction(ARTICLES_GET);
export const articleGetAsyncRequest = createAction(ARTICLES_GET_ASYNC_REQUEST);
export const articleGetAsyncSuccess = createAction(ARTICLES_GET_ASYNC_SUCCESS);
export const articleGetAsyncSuccessStatus = createAction(ARTICLES_GET_ASYNC_SUCCESS_STATUS);
export const articleGetAsyncFailure = createAction(ARTICLES_GET_ASYNC_FAILURE);

export const articleRemoveByNumber = (num: number) => (dispatch: Function) => {
    dispatch(articleRemove(num));
};
export const articleAdd = (data: Object) => (dispatch: Function) => {
    dispatch(articleAddAction(data));
};

export const articleGetAsync = () => (dispatch: Function) => {
    dispatch(articleGetAsyncRequest());
    return fetch(ARTICLES_PAGE_ROUTE, { method: 'GET' })
        .then((res) => {
            if (!res.ok) throw Error(res.statusText);
            return res.json();
        })
        .then((data) => {
            if (!data) throw Error('No message received');
            dispatch(articleGetAsyncSuccess(data));
            dispatch(articleGetAsyncSuccessStatus());
        })
        .catch(() => {
            dispatch(articleGetAsyncFailure());
        });
};
