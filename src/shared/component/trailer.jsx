// @flow

import React from 'react';

export default ({ title, genre, imgUrl }: {
    title: string, genre: string, imgUrl: string
}) =>
  <div
    className="trailer_block_preview_wrapper row col-12 col-md-6 justify-content-center"
  >
    <div className="trailer_block_preview">
      <div className="flex_wrapper_left">
        <div className="trailer_block_preview_img_wrapper">
          <div
            className="trailer_block_preview_play trailer_block_preview_play_triangle"
          />
          <div className="trailer_block_preview_hover_color" />
          <img
            src={imgUrl}
            alt="img"
          />
        </div>
      </div>
      <div className="flex_wrapper_right">
        <h2 className="trailer_block_preview_title">Lorem ipsum</h2>
        <p className="trailer_block_preview_description">{title}</p>
        <p className="trailer_block_preview_description">{genre.join(', ')}</p>
      </div>
    </div>
  </div>;
