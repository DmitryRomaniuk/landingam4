// @flow

import React from 'react';
import Helmet from 'react-helmet';
import injectSheet from 'react-jss';

import { APP_NAME } from '../../config';

const styles = {

};

const LoginPage = ({ classes }: { classes: Object }) =>
  <div>
    <Helmet
      meta={[
                { name: 'description', content: 'Hello App is an app to say hello' },
                { property: 'og:title', content: APP_NAME },
      ]}
    />
  </div>;

export default injectSheet(styles)(LoginPage);
