import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import {
  articleDeleteAsync,
  articleGetAsyncRequest,
  articleRemove,
  articleGetAsyncSuccessStatus,
  articleGetAsyncFailure,
} from './articles';

import { ARTICLES_PAGE_ROUTE } from '../../shared/routes';

const mockStore = configureMockStore([thunkMiddleware]);

afterEach(() => {
    fetchMock.restore();
});

test('articleDeleteAsync success', () => {
    fetchMock.delete(ARTICLES_PAGE_ROUTE + '/123', { id: '123' });
    const store = mockStore();
    return store.dispatch(articleDeleteAsync(123))
    .then(() => {
        expect(store.getActions()).toEqual([
            articleGetAsyncRequest(123),
            articleRemove(123),
            articleGetAsyncSuccessStatus(),
        ]);
    });
});

test('articleDeleteAsync 404', () => {
    fetchMock.delete(ARTICLES_PAGE_ROUTE + '/123', 404);
    const store = mockStore();
    return store.dispatch(articleDeleteAsync(123))
        .then(() => {
            expect(store.getActions()).toEqual([
                articleGetAsyncRequest(123),
                articleGetAsyncFailure(),
            ]);
        });
});

test('articleDeleteAsync data error', () => {
    fetchMock.delete(ARTICLES_PAGE_ROUTE + '/123', {});
    const store = mockStore();
    return store.dispatch(articleDeleteAsync(123))
        .then(() => {
            expect(store.getActions()).toEqual([
                articleGetAsyncRequest(123),
                articleRemove(123),
                articleGetAsyncSuccessStatus(),
            ]);
        });
});
