// @flow

import 'isomorphic-fetch';

import { createAction } from 'redux-actions';
// import { helloEndpointRoute } from '../routes';

export const ARTICLE_ADD = 'ARTICLE_ADD';
export const ARTICLE_EDIT = 'ARTICLE_EDIT';
export const ARTICLE_REMOVE = 'ARTICLE_REMOVE';

export const articleAdd = createAction(ARTICLE_ADD);
export const articleEdit = createAction(ARTICLE_EDIT);
export const articleRemove = createAction(ARTICLE_REMOVE);
