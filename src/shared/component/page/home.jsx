// @flow

import React from 'react';
import Helmet from 'react-helmet';
import injectSheet from 'react-jss';

import Modal from '../modal';
import Slider from '../container/slider';
import { APP_NAME } from '../../config';

const styles = {

};

const HomePage = ({ classes }: { classes: Object }) =>
  <div>
    <Helmet
      meta={[
                { name: 'description', content: 'Hello App is an app to say hello' },
                { property: 'og:title', content: APP_NAME },
      ]}
    />
      <Slider />
      <Modal />
  </div>;

export default injectSheet(styles)(HomePage);
