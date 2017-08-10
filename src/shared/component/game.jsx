// @flow

import React from 'react';

const Game = ({ title, description, imgUrl, platforms, likes, comments, rating }: {
    title: string, description: string, imgUrl: string, platforms: Array<string>,
    likes: number, comments: number, rating: number
}) =>
  <div className="row game_block_preview col-12 col-lg-6 ">
    <div className="col-12 col-sm">
      <div className="game_block_preview_img_wrapper">
        <img src={imgUrl} alt="img" />
      </div>
    </div>
    <div className="col-12 col-sm">
      <h2 className="game_block_preview_title">{title}</h2><br />
      <p className="game_block_preview_platform">{platforms.join(', ')}
        {/* <a className="game_block_preview_platform_link" href="#">Xbox One</a> */}
      </p>
      <p className="game_block_preview_description">
        {description}
      </p>
    </div>
    <div className="game_block_preview_rating">{rating}</div>
  </div>;

export default Game;
