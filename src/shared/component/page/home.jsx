// @flow

import React from 'react';
import Helmet from 'react-helmet';

import Modal from '../modal/react-modal';
import Slider from '../container/slider';
import News from '../container/news';
import Games from '../container/games';
import Trailers from '../container/trailers';
import Articles from '../container/articles';
import { APP_NAME } from '../../config';

const HomePage = () => (
  <div>
    <Helmet
      meta={[
                { name: 'description', content: 'Hello App is an app to say hello' },
                { property: 'og:title', content: APP_NAME },
      ]}
    />
    <Slider />
    <News />
    <Games />
    <Trailers />
    <Articles />
    <Modal />
  </div>
    );

export default HomePage;
