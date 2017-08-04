// @flow

import React from 'react';

import { STATIC_PATH } from '../config';

const Game = () =>
  <div className="game_block_preview row col-12 col-lg-6 ">
    <div className="col-12 col-sm">
      <div className="game_block_preview_img_wrapper">
        <img src={STATIC_PATH + '/img/games/game1.jpg'} alt="img" />
      </div>
    </div>
    <div className="col-12 col-sm">
      <h2 className="game_block_preview_title">Lorem ipsum</h2><br />
      <p className="game_block_preview_platform">PC,PS4,
                <a className="game_block_preview_platform_link" href="#">Xbox One</a>
      </p>
      <p className="game_block_preview_description">Lorem ipsum dolor sit amet, est ad lorem constituto.
                Ea eum doming tacimates tractatos, pri lobortis indoctum principes in, has quas meliore ullamcorper ei.
                Et lucilius efficiendi usu. Id quas omittam eum, sea omnes alienum dissentiunt ad.
            </p>
    </div>
    <div className="game_block_preview_rating">8.5</div>
  </div>;

export default Game;
