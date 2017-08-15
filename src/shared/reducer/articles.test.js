// @flow

import Immutable from 'immutable';
import { List } from 'immutable';

import {
    articleRemove,
    articleAddAction,
    articleEdit,
    articleFormToggle,
    articleGetAsyncFailure,
    articleGetAsyncRequest,
    articleGetAsyncSuccess,
    articleGetAsyncSuccessStatus,
} from '../action/articles';

import articlesReducer from './articles';

let articlesState;
let twoArticles;

beforeEach(() => {
    articlesState = articlesReducer(undefined, {});
    twoArticles = [
        {
            title: 'a1',
            description: 'a2',
            text: 'a3',
            avatarUrl: 'http://a1.a1',
            likes: 1,
            comments: 2,
            date: 3,
            author: 'Alex Bill',
        },
        {
            title: 'b1',
            description: 'b2',
            text: 'b3',
            avatarUrl: 'http://b1.b1',
            likes: 11,
            comments: 12,
            date: 13,
            author: 'Buzz Fill',
        }];
});

test('handle default', () => {
    expect(articlesState.get('listArticles')).toBe(List([]));
    expect(articlesState.get('status')).toBe('empty');
    expect(articlesState.get('modal')).toBe(false);
    expect(articlesState.get('number')).toBe(0);
});

test('handle ARTICLE_ADD', () => {
    articlesState = articlesReducer(articlesState, articleAddAction(Immutable.fromJS(twoArticles[0])));
    expect(articlesState.get('listArticles')).toEqual(Immutable.fromJS([twoArticles[0]]));
});

test('handle ARTICLES_FORM_TOGGLE', () => {
    articlesState = articlesReducer(articlesState, articleFormToggle());
    expect(articlesState.get('modal')).toBe(true);
});

test('handle ARTICLE_EDIT', () => {
    articlesState = articlesState.set('listArticles', articlesState.get('listArticles').push(...Immutable.fromJS(twoArticles)));
    articlesState = articlesReducer(articlesState, articleEdit(1));
    articlesState = articlesReducer(articlesState, articleAddAction(Immutable.fromJS(twoArticles[0])));
    expect(articlesState.get('listArticles')).toEqual(Immutable.fromJS([twoArticles[0], twoArticles[0]]));
});

test('handle ARTICLE_REMOVE', () => {
    articlesState = articlesState.set('listArticles', articlesState.get('listArticles').push(...Immutable.fromJS(twoArticles)));
    articlesState = articlesReducer(articlesState, articleRemove(1));
    expect(articlesState.get('listArticles')).toEqual(Immutable.fromJS([twoArticles[0]]));
    articlesState = articlesReducer(articlesState, articleRemove(0));
    expect(articlesState.get('listArticles')).toEqual(Immutable.fromJS(List([])));
});

test('handle ARTICLES_GET_ASYNC_REQUEST', () => {
    articlesState = articlesReducer(articlesState, articleGetAsyncRequest());
    expect(articlesState.get('status')).toBe('Loading...');
});

test('handle ARTICLES_GET_ASYNC_SUCCESS_STATUS', () => {
    articlesState = articlesReducer(articlesState, articleGetAsyncSuccessStatus());
    expect(articlesState.get('status')).toBe('Loaded');
});

test('handle ARTICLES_GET_ASYNC_SUCCESS', () => {
    articlesState = articlesReducer(articlesState, articleGetAsyncSuccess(twoArticles));
    expect(articlesState.get('listArticles')).toEqual(Immutable.fromJS(twoArticles));
});

test('handle ARTICLES_GET_ASYNC_FAILURE', () => {
    articlesState = articlesReducer(articlesState, articleGetAsyncFailure());
    expect(articlesState.get('status')).toBe('No message received, please check your connection');
});

