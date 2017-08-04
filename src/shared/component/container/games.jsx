// @flow

import React from 'react';

import { STATIC_PATH } from '../../config';

const Games = () =>
  <div className="games">
    <div className="games_left_decor" />
    <div className="container">
      <div className="game_main">
        <div className="chapter_header games_head">
          <div className="chapter_title games_title">
            <h2 className="chapter_title_name games_title_name">Игры</h2>
            <a className="chapter_title_all games_title_all" href="#">Весь&nbsp;каталог</a>
          </div>
          <div className="scroll-turn-preview">
            <a className="scroll-turn-preview-left" href="#carouselGamesIndicators" role="button" data-slide="prev" />
            <a className="scroll-turn-preview-right" href="#carouselGamesIndicators" role="button" data-slide="next" />
          </div>
        </div>
        <div className="game_block_preview_wrapper">
          <div id="carouselGamesIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselGamesIndicators" data-slide-to="0" className="active" />
              <li data-target="#carouselGamesIndicators" data-slide-to="1" />
              <li data-target="#carouselGamesIndicators" data-slide-to="2" />
              <li data-target="#carouselGamesIndicators" data-slide-to="3" />
              <li data-target="#carouselGamesIndicators" data-slide-to="4" />
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <div className="container">
                  <div className="row">
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
                        <p className="game_block_preview_description">Lorem ipsum dolor sit amet, est ad lorem constituto. Ea eum doming tacimates tractatos, pri lobortis indoctum principes in, has quas meliore ullamcorper ei. Et lucilius efficiendi usu. Id quas omittam eum, sea omnes alienum dissentiunt
                                                    ad.
                                                </p>
                      </div>
                      <div className="game_block_preview_rating">8.5</div>
                    </div>
                    <div className="game_block_preview row col-12 col-lg-6 ">
                      <div className="col-12 col-sm">
                        <div className="game_block_preview_img_wrapper">
                          <img src={STATIC_PATH + '/img/games/game2.jpg'} alt="img" />
                        </div>
                      </div>
                      <div className="col-12 col-sm">
                        <h2 className="game_block_preview_title">Lorem ipsum</h2><br />
                        <p className="game_block_preview_platform">PC,PS4,
                                                    <a className="game_block_preview_platform_link" href="#">Xbox One</a>
                        </p>
                        <p className="game_block_preview_description">Lorem ipsum dolor sit amet, est ad lorem constituto. Ea eum doming tacimates tractatos, pri lobortis indoctum principes in, has quas meliore ullamcorper ei. Et lucilius efficiendi usu. Id quas omittam eum, sea omnes alienum dissentiunt
                                                    ad.
                                                </p>
                      </div>
                      <div className="game_block_preview_rating">8.5</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="game_block_preview row col-12 col-lg-6 ">
                      <div className="col-12 col-sm">
                        <div className="game_block_preview_img_wrapper">
                          <img src={STATIC_PATH + '/img/games/game3.jpg'} alt="img" />
                        </div>
                      </div>
                      <div className="col-12 col-sm">
                        <h2 className="game_block_preview_title">Lorem ipsum</h2><br />
                        <p className="game_block_preview_platform">PC,PS4,
                                                    <a className="game_block_preview_platform_link" href="#">Xbox One</a>
                        </p>
                        <p className="game_block_preview_description">Lorem ipsum dolor sit amet, est ad lorem constituto. Ea eum doming tacimates tractatos, pri lobortis indoctum principes in, has quas meliore ullamcorper ei. Et lucilius efficiendi usu. Id quas omittam eum, sea omnes alienum dissentiunt
                                                    ad.
                                                </p>
                      </div>
                      <div className="game_block_preview_rating">8.5</div>
                    </div>
                    <div className="game_block_preview row col-12 col-lg-6 ">
                      <div className="col-12 col-sm">
                        <div className="game_block_preview_img_wrapper">
                          <img src={STATIC_PATH + '/img/games/game4.jpg'} alt="img" />
                        </div>
                      </div>
                      <div className="col-12 col-sm">
                        <h2 className="game_block_preview_title">Lorem ipsum</h2><br />
                        <p className="game_block_preview_platform">PC,PS4,
                                                    <a className="game_block_preview_platform_link" href="#">Xbox One</a>
                        </p>
                        <p className="game_block_preview_description">Lorem ipsum dolor sit amet, est ad lorem constituto. Ea eum doming tacimates tractatos, pri lobortis indoctum principes in, has quas meliore ullamcorper ei. Et lucilius efficiendi usu. Id quas omittam eum, sea omnes alienum dissentiunt
                                                    ad.
                                                </p>
                      </div>
                      <div className="game_block_preview_rating">8.5</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
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
                        <p className="game_block_preview_description">Lorem ipsum dolor sit amet, est ad lorem constituto. Ea eum doming tacimates tractatos, pri lobortis indoctum principes in, has quas meliore ullamcorper ei. Et lucilius efficiendi usu. Id quas omittam eum, sea omnes alienum dissentiunt
                                                    ad.
                                                </p>
                      </div>
                      <div className="game_block_preview_rating">8.5</div>
                    </div>
                    <div className="game_block_preview row col-12 col-lg-6 ">
                      <div className="col-12 col-sm">
                        <div className="game_block_preview_img_wrapper">
                          <img src={STATIC_PATH + '/img/games/game2.jpg'} alt="img" />
                        </div>
                      </div>
                      <div className="col-12 col-sm">
                        <h2 className="game_block_preview_title">Lorem ipsum</h2><br />
                        <p className="game_block_preview_platform">PC,PS4,
                                                    <a className="game_block_preview_platform_link" href="#">Xbox One</a>
                        </p>
                        <p className="game_block_preview_description">Lorem ipsum dolor sit amet, est ad lorem constituto. Ea eum doming tacimates tractatos, pri lobortis indoctum principes in, has quas meliore ullamcorper ei. Et lucilius efficiendi usu. Id quas omittam eum, sea omnes alienum dissentiunt
                                                    ad.
                                                </p>
                      </div>
                      <div className="game_block_preview_rating">8.5</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="game_block_preview row col-12 col-lg-6 ">
                      <div className="col-12 col-sm">
                        <div className="game_block_preview_img_wrapper">
                          <img src={STATIC_PATH + '/img/games/game3.jpg'} alt="img" />
                        </div>
                      </div>
                      <div className="col-12 col-sm">
                        <h2 className="game_block_preview_title">Lorem ipsum</h2><br />
                        <p className="game_block_preview_platform">PC,PS4,
                                                    <a className="game_block_preview_platform_link" href="#">Xbox One</a>
                        </p>
                        <p className="game_block_preview_description">Lorem ipsum dolor sit amet, est ad lorem constituto. Ea eum doming tacimates tractatos, pri lobortis indoctum principes in, has quas meliore ullamcorper ei. Et lucilius efficiendi usu. Id quas omittam eum, sea omnes alienum dissentiunt
                                                    ad.
                                                </p>
                      </div>
                      <div className="game_block_preview_rating">8.5</div>
                    </div>
                    <div className="game_block_preview row col-12 col-lg-6 ">
                      <div className="col-12 col-sm">
                        <div className="game_block_preview_img_wrapper">
                          <img src={STATIC_PATH + '/img/games/game4.jpg'} alt="img" />
                        </div>
                      </div>
                      <div className="col-12 col-sm">
                        <h2 className="game_block_preview_title">Lorem ipsum</h2><br />
                        <p className="game_block_preview_platform">PC,PS4,
                                                    <a className="game_block_preview_platform_link" href="#">Xbox One</a>
                        </p>
                        <p className="game_block_preview_description">Lorem ipsum dolor sit amet, est ad lorem constituto. Ea eum doming tacimates tractatos, pri lobortis indoctum principes in, has quas meliore ullamcorper ei. Et lucilius efficiendi usu. Id quas omittam eum, sea omnes alienum dissentiunt
                                                    ad.
                                                </p>
                      </div>
                      <div className="game_block_preview_rating">8.5</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
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
                        <p className="game_block_preview_description">Lorem ipsum dolor sit amet, est ad lorem constituto. Ea eum doming tacimates tractatos, pri lobortis indoctum principes in, has quas meliore ullamcorper ei. Et lucilius efficiendi usu. Id quas omittam eum, sea omnes alienum dissentiunt
                                                    ad.
                                                </p>
                      </div>
                      <div className="game_block_preview_rating">8.5</div>
                    </div>
                    <div className="game_block_preview row col-12 col-lg-6 ">
                      <div className="col-12 col-sm">
                        <div className="game_block_preview_img_wrapper">
                          <img src={STATIC_PATH + '/img/games/game2.jpg'} alt="img" />
                        </div>
                      </div>
                      <div className="col-12 col-sm">
                        <h2 className="game_block_preview_title">Lorem ipsum</h2><br />
                        <p className="game_block_preview_platform">PC,PS4,
                                                    <a className="game_block_preview_platform_link" href="#">Xbox One</a>
                        </p>
                        <p className="game_block_preview_description">Lorem ipsum dolor sit amet, est ad lorem constituto. Ea eum doming tacimates tractatos, pri lobortis indoctum principes in, has quas meliore ullamcorper ei. Et lucilius efficiendi usu. Id quas omittam eum, sea omnes alienum dissentiunt
                                                    ad.
                                                </p>
                      </div>
                      <div className="game_block_preview_rating">8.5</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="game_block_preview row col-12 col-lg-6 ">
                      <div className="col-12 col-sm">
                        <div className="game_block_preview_img_wrapper">
                          <img src={STATIC_PATH + '/img/games/game3.jpg'} alt="img" />
                        </div>
                      </div>
                      <div className="col-12 col-sm">
                        <h2 className="game_block_preview_title">Lorem ipsum</h2><br />
                        <p className="game_block_preview_platform">PC,PS4,
                                                    <a className="game_block_preview_platform_link" href="#">Xbox One</a>
                        </p>
                        <p className="game_block_preview_description">Lorem ipsum dolor sit amet, est ad lorem constituto. Ea eum doming tacimates tractatos, pri lobortis indoctum principes in, has quas meliore ullamcorper ei. Et lucilius efficiendi usu. Id quas omittam eum, sea omnes alienum dissentiunt
                                                    ad.
                                                </p>
                      </div>
                      <div className="game_block_preview_rating">8.5</div>
                    </div>
                    <div className="game_block_preview row col-12 col-lg-6 ">
                      <div className="col-12 col-sm">
                        <div className="game_block_preview_img_wrapper">
                          <img src={STATIC_PATH + '/img/games/game4.jpg'} alt="img" />
                        </div>
                      </div>
                      <div className="col-12 col-sm">
                        <h2 className="game_block_preview_title">Lorem ipsum</h2><br />
                        <p className="game_block_preview_platform">PC,PS4,
                                                    <a className="game_block_preview_platform_link" href="#">Xbox One</a>
                        </p>
                        <p className="game_block_preview_description">Lorem ipsum dolor sit amet, est ad lorem constituto. Ea eum doming tacimates tractatos, pri lobortis indoctum principes in, has quas meliore ullamcorper ei. Et lucilius efficiendi usu. Id quas omittam eum, sea omnes alienum dissentiunt
                                                    ad.
                                                </p>
                      </div>
                      <div className="game_block_preview_rating">8.5</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
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
                        <p className="game_block_preview_description">Lorem ipsum dolor sit amet, est ad lorem constituto. Ea eum doming tacimates tractatos, pri lobortis indoctum principes in, has quas meliore ullamcorper ei. Et lucilius efficiendi usu. Id quas omittam eum, sea omnes alienum dissentiunt
                                                    ad.
                                                </p>
                      </div>
                      <div className="game_block_preview_rating">8.5</div>
                    </div>
                    <div className="game_block_preview row col-12 col-lg-6 ">
                      <div className="col-12 col-sm">
                        <div className="game_block_preview_img_wrapper">
                          <img src={STATIC_PATH + '/img/games/game2.jpg'} alt="img" />
                        </div>
                      </div>
                      <div className="col-12 col-sm">
                        <h2 className="game_block_preview_title">Lorem ipsum</h2><br />
                        <p className="game_block_preview_platform">PC,PS4,
                                                    <a className="game_block_preview_platform_link" href="#">Xbox One</a>
                        </p>
                        <p className="game_block_preview_description">Lorem ipsum dolor sit amet, est ad lorem constituto. Ea eum doming tacimates tractatos, pri lobortis indoctum principes in, has quas meliore ullamcorper ei. Et lucilius efficiendi usu. Id quas omittam eum, sea omnes alienum dissentiunt
                                                    ad.
                                                </p>
                      </div>
                      <div className="game_block_preview_rating">8.5</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="game_block_preview row col-12 col-lg-6 ">
                      <div className="col-12 col-sm">
                        <div className="game_block_preview_img_wrapper">
                          <img src={STATIC_PATH + '/img/games/game3.jpg'} alt="img" />
                        </div>
                      </div>
                      <div className="col-12 col-sm">
                        <h2 className="game_block_preview_title">Lorem ipsum</h2><br />
                        <p className="game_block_preview_platform">PC,PS4,
                                                    <a className="game_block_preview_platform_link" href="#">Xbox One</a>
                        </p>
                        <p className="game_block_preview_description">Lorem ipsum dolor sit amet, est ad lorem constituto. Ea eum doming tacimates tractatos, pri lobortis indoctum principes in, has quas meliore ullamcorper ei. Et lucilius efficiendi usu. Id quas omittam eum, sea omnes alienum dissentiunt
                                                    ad.
                                                </p>
                      </div>
                      <div className="game_block_preview_rating">8.5</div>
                    </div>
                    <div className="game_block_preview row col-12 col-lg-6 ">
                      <div className="col-12 col-sm">
                        <div className="game_block_preview_img_wrapper">
                          <img src={STATIC_PATH + '/img/games/game4.jpg'} alt="img" />
                        </div>
                      </div>
                      <div className="col-12 col-sm">
                        <h2 className="game_block_preview_title">Lorem ipsum</h2><br />
                        <p className="game_block_preview_platform">PC,PS4,
                                                    <a className="game_block_preview_platform_link" href="#">Xbox One</a>
                        </p>
                        <p className="game_block_preview_description">Lorem ipsum dolor sit amet, est ad lorem constituto. Ea eum doming tacimates tractatos, pri lobortis indoctum principes in, has quas meliore ullamcorper ei. Et lucilius efficiendi usu. Id quas omittam eum, sea omnes alienum dissentiunt
                                                    ad.
                                                </p>
                      </div>
                      <div className="game_block_preview_rating">8.5</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
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
                        <p className="game_block_preview_description">Lorem ipsum dolor sit amet, est ad lorem constituto. Ea eum doming tacimates tractatos, pri lobortis indoctum principes in, has quas meliore ullamcorper ei. Et lucilius efficiendi usu. Id quas omittam eum, sea omnes alienum dissentiunt
                                                    ad.
                                                </p>
                      </div>
                      <div className="game_block_preview_rating">8.5</div>
                    </div>
                    <div className="game_block_preview row col-12 col-lg-6 ">
                      <div className="col-12 col-sm">
                        <div className="game_block_preview_img_wrapper">
                          <img src={STATIC_PATH + '/img/games/game2.jpg'} alt="img" />
                        </div>
                      </div>
                      <div className="col-12 col-sm">
                        <h2 className="game_block_preview_title">Lorem ipsum</h2><br />
                        <p className="game_block_preview_platform">PC,PS4,
                                                    <a className="game_block_preview_platform_link" href="#">Xbox One</a>
                        </p>
                        <p className="game_block_preview_description">Lorem ipsum dolor sit amet, est ad lorem constituto. Ea eum doming tacimates tractatos, pri lobortis indoctum principes in, has quas meliore ullamcorper ei. Et lucilius efficiendi usu. Id quas omittam eum, sea omnes alienum dissentiunt
                                                    ad.
                                                </p>
                      </div>
                      <div className="game_block_preview_rating">8.5</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="game_block_preview row col-12 col-lg-6 ">
                      <div className="col-12 col-sm">
                        <div className="game_block_preview_img_wrapper">
                          <img src={STATIC_PATH + '/img/games/game3.jpg'} alt="img" />
                        </div>
                      </div>
                      <div className="col-12 col-sm">
                        <h2 className="game_block_preview_title">Lorem ipsum</h2><br />
                        <p className="game_block_preview_platform">PC,PS4,
                                                    <a className="game_block_preview_platform_link" href="#">Xbox One</a>
                        </p>
                        <p className="game_block_preview_description">Lorem ipsum dolor sit amet, est ad lorem constituto. Ea eum doming tacimates tractatos, pri lobortis indoctum principes in, has quas meliore ullamcorper ei. Et lucilius efficiendi usu. Id quas omittam eum, sea omnes alienum dissentiunt
                                                    ad.
                                                </p>
                      </div>
                      <div className="game_block_preview_rating">8.5</div>
                    </div>
                    <div className="game_block_preview row col-12 col-lg-6 ">
                      <div className="col-12 col-sm">
                        <div className="game_block_preview_img_wrapper">
                          <img src={STATIC_PATH + '/img/games/game4.jpg'} alt="img" />
                        </div>
                      </div>
                      <div className="col-12 col-sm">
                        <h2 className="game_block_preview_title">Lorem ipsum</h2><br />
                        <p className="game_block_preview_platform">PC,PS4,
                                                    <a className="game_block_preview_platform_link" href="#">Xbox One</a>
                        </p>
                        <p className="game_block_preview_description">Lorem ipsum dolor sit amet, est ad lorem constituto. Ea eum doming tacimates tractatos, pri lobortis indoctum principes in, has quas meliore ullamcorper ei. Et lucilius efficiendi usu. Id quas omittam eum, sea omnes alienum dissentiunt
                                                    ad.
                                                </p>
                      </div>
                      <div className="game_block_preview_rating">8.5</div>
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

export default Games;
