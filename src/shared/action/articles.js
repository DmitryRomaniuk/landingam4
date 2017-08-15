// @flow

import 'isomorphic-fetch';

import { createAction } from 'redux-actions';
import { ARTICLES_PAGE_ROUTE } from '../routes';

export const ARTICLE_ADD = 'ARTICLE_ADD';
export const ARTICLE_EDIT = 'ARTICLE_EDIT';
export const ARTICLE_REMOVE = 'ARTICLE_REMOVE';
export const ARTICLES_GET = 'ARTICLES_GET';
export const ARTICLES_FORM_ADD = 'ARTICLES_FORM_ADD';
export const ARTICLES_FORM_TOGGLE = 'ARTICLES_FORM_TOGGLE';
export const ARTICLES_GET_ASYNC_REQUEST = 'ARTICLES_GET_ASYNC_REQUEST';
export const ARTICLES_GET_ASYNC_SUCCESS = 'ARTICLES_GET_ASYNC_SUCCESS';
export const ARTICLES_GET_ASYNC_SUCCESS_STATUS = 'ARTICLES_GET_ASYNC_SUCCESS_STATUS';
export const ARTICLES_GET_ASYNC_FAILURE = 'ARTICLES_GET_ASYNC_FAILURE';

export const articleAddAction = createAction(ARTICLE_ADD);
export const articleEdit = createAction(ARTICLE_EDIT);
export const articleRemove = createAction(ARTICLE_REMOVE);
export const articleFormAdd = createAction(ARTICLES_FORM_ADD);
export const articleFormToggle = createAction(ARTICLES_FORM_TOGGLE);
export const articleGetAsyncRequest = createAction(ARTICLES_GET_ASYNC_REQUEST);
export const articleGetAsyncSuccess = createAction(ARTICLES_GET_ASYNC_SUCCESS);
export const articleGetAsyncSuccessStatus = createAction(ARTICLES_GET_ASYNC_SUCCESS_STATUS);
export const articleGetAsyncFailure = createAction(ARTICLES_GET_ASYNC_FAILURE);

export const articleRemoveById = (id: string) => (dispatch: Function) => {
    dispatch(articleRemove(id));
};

export const articleAdd = (data: Object) => (dispatch: Function) => {
    dispatch(articleAddAction(data));
};

export const articleEditById = (id: string) => (dispatch: Function) => {
    dispatch(articleEdit(id));
};

export const articleFormToggleSwitch = () => (dispatch: Function) => {
    dispatch(articleFormToggle());
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

export const articleSaveAsync = (data: Object) => (dispatch: Function) => {
    dispatch(articleGetAsyncRequest(data));
    return fetch(ARTICLES_PAGE_ROUTE, { method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((res) => {
            if (!res.ok) throw Error(res.statusText);
            return res.json();
        })
        .then((dataRes) => {
            if (!dataRes) throw Error('No message received');
            dispatch(articleAddAction(dataRes));
            dispatch(articleGetAsyncSuccessStatus());
        })
        .catch(() => {
            dispatch(articleGetAsyncFailure());
        });
};

export const articleEditAsync = (data: Object) => (dispatch: Function) => {
    dispatch(articleGetAsyncRequest(data));
    return fetch(ARTICLES_PAGE_ROUTE + '/' + data.id, { method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((res) => {
            if (!res.ok) throw Error(res.statusText);
            return res.json();
        })
        .then((dataRes) => {
            if (!dataRes) throw Error('No message received');
            dispatch(articleEdit(dataRes.id));
            dispatch(articleAddAction(dataRes));
            dispatch(articleGetAsyncSuccessStatus());
        })
        .catch(() => {
            dispatch(articleGetAsyncFailure());
        });
};

export const articleDeleteAsync = (id: string) => (dispatch: Function) => {
    dispatch(articleGetAsyncRequest(id));
    return fetch(ARTICLES_PAGE_ROUTE + '/' + id, { method: 'DELETE',
        headers: {
            'Content-type': 'text/plain',
        },
        body: id,
    })
        .then((res) => {
            if (!res.ok) throw Error(res.statusText);
            return res.json();
        })
        .then((data) => {
            if (!data) throw Error('No message received');
            dispatch(articleRemove(id));
            dispatch(articleGetAsyncSuccessStatus());
        })
        .catch(() => {
            dispatch(articleGetAsyncFailure());
        });
};
