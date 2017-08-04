// @flow

import Immutable from 'immutable';
import type { fromJS as Immut } from 'immutable';

import {
    ARTICLE_ADD,
    ARTICLE_EDIT,
    ARTICLE_REMOVE,
} from '../action/articles';

const initialState = Immutable.fromJS({
    listArticles: [
        {
            title: '',
            description: '',
            text: '',
            avatarUrl: '',
            likes: 0,
            comments: 0,
            date: 0,
            author: '',
        },
    ],
});

const articlesReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
    switch (action.type) {
    case ARTICLE_ADD:
        return state.set('message', action.payload);
    case ARTICLE_EDIT:
        return state.set('message', action.payload);
    case ARTICLE_REMOVE:
        return state.set('message', action.payload);
    // case SAY_HELLO_ASYNC_REQUEST:
    //     return state.set('messageAsync', 'Loading...');
    // case SAY_HELLO_ASYNC_SUCCESS:
    //     return state.set('messageAsync', action.payload);
    // case SAY_HELLO_ASYNC_FAILURE:
    //     return state.set('messageAsync', 'No message received, please check your connection');
    default:
        return state;
    }
};

export default articlesReducer;
