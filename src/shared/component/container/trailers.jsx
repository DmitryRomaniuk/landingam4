// @flow

import React from 'react';

import { STATIC_PATH } from '../../config';

const Trailers = () =>
  <div className="trailers">
    <div className="trailers_left_decor" />
    <div className="container">
      <div className="trailer_main">
        <div className="chapter_header trailers_head">
          <div className="chapter_title trailers_title">
            <span className="chapter_title_name trailers_title_name">Трейлеры</span>
            <a className="chapter_title_all trailers_title_all" href="#">Весь&nbsp;каталог</a>
          </div>
          <div className="scroll-turn-preview">
            <a
              className="scroll-turn-preview-left" href="#carouselTrailerIndicators" role="button"
              data-slide="prev"
            />
            <a
              className="scroll-turn-preview-right" href="#carouselTrailerIndicators" role="button"
              data-slide="next"
            />
          </div>
        </div>
        <div className="trailer_blocks_preview_wrapper">
          <div id="carouselTrailerIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselTrailerIndicators" data-slide-to="0" className="active" />
              <li data-target="#carouselTrailerIndicators" data-slide-to="1" />
              <li data-target="#carouselTrailerIndicators" data-slide-to="2" />
              <li data-target="#carouselTrailerIndicators" data-slide-to="3" />
              <li data-target="#carouselTrailerIndicators" data-slide-to="4" />
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <div className="container">
                  <div className="row justify-content-center">
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
                              src={STATIC_PATH + '/img/trailers/trailer1.jpg'}
                              alt="img"
                            />
                          </div>
                        </div>
                        <div className="flex_wrapper_right">
                          <h2 className="trailer_block_preview_title">Lorem ipsum</h2>
                          <p className="trailer_block_preview_description">Lorem ipsum dolor
                                                        sit amet.</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="trailer_block_preview_wrapper col-12 col-md-6 justify-content-center"
                    >
                      <div className="trailer_block_preview">
                        <div className="flex_wrapper_left">
                          <div className="trailer_block_preview_img_wrapper">
                            <div
                              className="trailer_block_preview_play trailer_block_preview_play_triangle"
                            />
                            <div className="trailer_block_preview_hover_color" />
                            <img
                              src={STATIC_PATH + '/img/trailers/trailer2.jpg'}
                              alt="img"
                            />
                          </div>
                        </div>
                        <div className="flex_wrapper_right">
                          <h2 className="trailer_block_preview_title">Lorem ipsum</h2>
                          <p className="trailer_block_preview_description">Lorem ipsum dolor
                                                        sit amet.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div
                      className="trailer_block_preview_wrapper col-12 col-md-6 justify-content-center"
                    >
                      <div className="trailer_block_preview">
                        <div className="flex_wrapper_left">
                          <div className="trailer_block_preview_img_wrapper">
                            <div
                              className="trailer_block_preview_play trailer_block_preview_play_triangle"
                            />
                            <div className="trailer_block_preview_hover_color" />
                            <img
                              src={STATIC_PATH + '/img/trailers/trailer3.jpg'}
                              alt="img"
                            />
                          </div>
                        </div>
                        <div className="flex_wrapper_right">
                          <h2 className="trailer_block_preview_title">Lorem ipsum</h2>
                          <p className="trailer_block_preview_description">Lorem ipsum dolor
                                                        sit amet.</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="trailer_block_preview_wrapper col-12 col-md-6 justify-content-center"
                    >
                      <div className="trailer_block_preview">
                        <div className="flex_wrapper_left">
                          <div className="trailer_block_preview_img_wrapper">
                            <div
                              className="trailer_block_preview_play trailer_block_preview_play_triangle"
                            />
                            <div className="trailer_block_preview_hover_color" />
                            <img
                              src={STATIC_PATH + '/img/trailers/trailer4.jpg'}
                              alt="img"
                            />
                          </div>
                        </div>
                        <div className="flex_wrapper_right">
                          <h2 className="trailer_block_preview_title">Lorem ipsum</h2>
                          <p className="trailer_block_preview_description">Lorem ipsum dolor
                                                        sit amet.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div
                      className="trailer_block_preview_wrapper col-12 col-md-6 justify-content-center"
                    >
                      <div className="trailer_block_preview">
                        <div className="flex_wrapper_left">
                          <div className="trailer_block_preview_img_wrapper">
                            <div
                              className="trailer_block_preview_play trailer_block_preview_play_triangle"
                            />
                            <div className="trailer_block_preview_hover_color" />
                            <img
                              src={STATIC_PATH + '/img/trailers/trailer5.jpg'}
                              alt="img"
                            />
                          </div>
                        </div>
                        <div className="flex_wrapper_right">
                          <h2 className="trailer_block_preview_title">Lorem ipsum</h2>
                          <p className="trailer_block_preview_description">Lorem ipsum dolor
                                                        sit amet.</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="trailer_block_preview_wrapper col-12 col-md-6 justify-content-center"
                    >
                      <div className="trailer_block_preview">
                        <div className="flex_wrapper_left">
                          <div className="trailer_block_preview_img_wrapper">
                            <div
                              className="trailer_block_preview_play trailer_block_preview_play_triangle"
                            />
                            <div className="trailer_block_preview_hover_color" />
                            <img
                              src={STATIC_PATH + '/img/trailers/trailer6.jpg'}
                              alt="img"
                            />
                          </div>
                        </div>
                        <div className="flex_wrapper_right">
                          <h2 className="trailer_block_preview_title">Lorem ipsum</h2>
                          <p className="trailer_block_preview_description">Lorem ipsum dolor
                                                        sit amet.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;

export default Trailers;
