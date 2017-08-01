// @flow

import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import HomePage from './component/page/home';
import LoginPage from './component/page/login';
import Footer from './component/footer';
import Nav from './component/nav';
import NotFoundPage from './component/page/not-found';
import { APP_NAME } from './config';
import * as routes from './routes';

const App = () =>
  <div>
    <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME}>
      <meta charSet="utf-8" />
    </Helmet>
    <Nav />
    <Switch>
      <Route exact path={routes.HOME_PAGE_ROUTE} render={() => <HomePage />} />
      <Route path={routes.LOGIN_ROUTE} render={() => <LoginPage />} />
      <Route component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>;

export default App;
