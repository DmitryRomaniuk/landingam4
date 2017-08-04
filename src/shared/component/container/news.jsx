// @flow

import React from 'react';

import { STATIC_PATH } from '../../config';

const News = () =>
  <div className="news container">
    <div className="sort_news row justify-content-end"><span className="sort_news_sort_by">Сортировать:</span>
      <button type="button" className="btn btn-warning sort_news_btn" data-active="true">Популярные</button>
      <button type="button" className="btn btn-secondary sort_news_btn">Новые</button>
    </div>
    <div className="chapter_header news_title row align-items-center">
      <div className="chapter_title col-12 col-lg-7">
        <h2 className="chapter_title_name news_title_name">НОВОСТИ</h2>
        <a className="chapter_title_all news_title_all" href="#">
          <span className="chapter_title_all_span news_title_name_span">Все&nbsp;новости</span>
        </a>
      </div>
      <select className="custom-select news_select_type col-12 col-lg-5" id="inlineFormCustomSelect">
        <option defaultValue>Все</option>
        <option value="1">Гонки</option>
        <option value="2">Квесты</option>
        <option value="3">Стратегии</option>
        <option value="4">Шутеры</option>
        <option value="5">Симуляторы</option>
        <option value="6">Логические</option>
      </select>
    </div>
    <hr className="news_title_underline_line" />
    <div className="news_slides">
      <div className="row">
        <div className="news_slides_wrapper_img col-12 col-md-7">
          <img src={STATIC_PATH + '/img/news/news1.jpg'} alt="fast car" />
          <div className="news_slides_main_description decor_line_text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="news_slides_wrapper_img col-12 col-md-5">
          <img src={STATIC_PATH + '/img/news/news4.jpg'} alt="img" />
          <div className="news_slides_second_description decor_line_text">
            <p>Lorem ipsum dolor sit
                            <strong className="news_slides_second_description-font-bold">amet</strong>, consectetur
                            adipiscing elit.
                        </p>
          </div>
          <div className="description-bubble description-bubble-left description-bubble-top-middle">
            <div className="description-bubble-wrapper">
              <p className="description-bubble_text">
                <span><strong className="news_slides_second_description-font-bold decor_line_text">Lorem</strong>
                ipsum dolor sit amet, consectetur adipiscing elit.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="container col-12 col-md-7">
          <div className="news_slides_wrapper_img col-6">
            <img src={STATIC_PATH + '/img/news/news2.jpg'} alt="img" />
            <div className="news_slides_second_description decor_line_text">
              <p>Lorem ipsum dolor sit
                                <strong className="news_slides_second_description-font-bold">amet</strong>,
                                consectetur adipiscing elit.
                            </p>
            </div>
            <div className="description-bubble description-bubble-top description-bubble-top-large">
              <div className="description-bubble-wrapper">
                <p className="description-bubble_text">
                  <strong
                    className="news_slides_second_description-font-bold decor_line_text"
                  >Lorem</strong>
                                    ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
              </div>
            </div>
          </div>
          <div className="news_slides_wrapper_img col-6">
            <img src={STATIC_PATH + '/img/news/news3.jpg'} alt="img" />
            <div className="news_slides_second_description decor_line_text">Lorem ipsum dolor sit
                            <strong className="news_slides_second_description-font-bold">amet</strong>, consectetur
                            adipiscing elit.
                        </div>
            <div className="description-bubble description-bubble-top description-bubble-top-large">
              <div className="description-bubble-wrapper">
                <p className="description-bubble_text">
                  <strong
                    className="news_slides_second_description-font-bold decor_line_text"
                  >Lorem</strong>
                                    ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5">
          <div className="news_slides_wrapper_img row">
            <img src={STATIC_PATH + '/img/news/news5.jpg'} alt="img" />
            <div className="news_slides_second_description decor_line_text">
              <p>Lorem ipsum dolor sit
                                <strong className="news_slides_second_description-font-bold">amet</strong>,
                                consectetur adipiscing elit.
                            </p>
            </div>
            <div className="description-bubble description-bubble-left description-bubble-top-middle">
              <div className="description-bubble-wrapper">
                <p className="description-bubble_text">
                  <span><strong className="news_slides_second_description-font-bold decor_line_text">Lorem</strong>
                  ipsum dolor sit amet, consectetur adipiscing elit.</span>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="news_slides_wrapper_img col-6">
              <img src={STATIC_PATH + '/img/news/news6.jpg'} alt="img" />
              <div className="news_slides_second_description decor_line_text">
                <p>Lorem ipsum dolor sit
                                    <strong className="news_slides_second_description-font-bold">amet</strong>,
                                    consectetur adipiscing elit.
                                </p>
              </div>
              <div className="description-bubble description-bubble-top description-bubble-top-small">
                <div className="description-bubble-wrapper">
                  <p className="description-bubble_text">
                    <strong
                      className="news_slides_second_description-font-bold decor_line_text"
                    >Lorem</strong>
                                        ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                </div>
              </div>
            </div>
            <div className="news_slides_wrapper_img col-6">
              <img src={STATIC_PATH + '/img/news/news7.jpg'} alt="img" />
              <div className="news_slides_second_description decor_line_text">
                <p>Lorem ipsum dolor sit
                                    <strong className="news_slides_second_description-font-bold">amet</strong>,
                                    consectetur adipiscing elit.
                                </p>
              </div>
              <div className="description-bubble description-bubble-top description-bubble-top-small">
                <div className="description-bubble-wrapper">
                  <p className="description-bubble_text">
                    <strong
                      className="news_slides_second_description-font-bold decor_line_text"
                    >Lorem</strong>
                                        ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="add_more">
      <button type="button" className="btn btn-secondary add_more_button">Подгрузить еще</button>
    </div>
  </div>;

export default News;
