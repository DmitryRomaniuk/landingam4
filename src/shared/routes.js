// @flow

export const HOME_PAGE_ROUTE = '/';
export const NEWS_PAGE_ROUTE = '/news';
export const ARTICLES_PAGE_ROUTE = '/articles';
export const VIDEOS_PAGE_ROUTE = '/#';
export const GAMES_PAGE_ROUTE = '/games';
export const TRAILERS_PAGE_ROUTE = '/trailers';
export const LOGIN_ROUTE = '/login';

export const helloEndpointRoute = (num: ?number) => `/ajax/hello/${num || ':num'}`;
