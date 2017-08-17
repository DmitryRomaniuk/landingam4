// @flow

import React from 'react';
import Helmet from 'react-helmet';

import { APP_NAME } from '../../config';

const LoginPage = () =>
  <div>
    <Helmet
      meta={[
                { name: 'description', content: 'login page' },
                { property: 'og:title', content: APP_NAME },
      ]}
    />
  </div>;

export default LoginPage;
