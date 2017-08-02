// @flow

import React from 'react';
import injectSheet from 'react-jss';

import {STATIC_PATH} from '../../config';

const styles = {};

const Articles = ({classes}: { classes: Object }) =>
    <div className="articles">
        <div className="container">
            <div className="chapter_header articles_head">
                <div className="chapter_title articles_title">
                    <span className="chapter_title_name articles_title_name">Статьи</span>
                    <a className="chapter_title_all articles_title_all" href="#">
                        <span className="chapter_title_name_span articles_title_name_span">Все&nbsp;статьи</span>
                    </a>
                </div>
                <button className="btn btn-secondary add_more_button add_article">Добавить статью&nbsp;
                    <strong>+</strong></button>
            </div>
            <div className="articles_main row">
                <div className="article_block_preview_wrapper col-12 col-md-6 col-lg-6 col-xl-4">
                    <div className="article_block_preview">
                        <div className="article_block_preview_header">
                            <div className="article_block_preview_date_img_block">
                                <div className="article_block_preview_date">
                  <span className="article_block_preview_date_wrapper">
                <span className="article_block_preview_date_number">02</span><br/>март
                  </span>
                                </div>
                                <div className="article_block_preview_img">
                                    <img src={STATIC_PATH + "/img/authors/author1.jpg"} alt="img"/>
                                </div>
                            </div>
                            <div className="article_block_preview_name">
                                <h2>Lorem ipsum</h2>
                                <div className="article_block_preview_count_open"><i className="icon-rocket"/>24</div>
                                <div className="article_block_preview_count_comment"><i className="icon-bubble2"/>32
                                </div>
                            </div>
                        </div>
                        <article className="article_block_preview_description_wrapper">
                            <h3 className="article_block_preview_title">Lorem ipsum dolor sit amet, ut mei agam
                                assueverit</h3>
                            <p className="article_block_preview_short">Ea facilisi honestatis sea. An aperiam salutandi
                                nam. Sea harum maiorum dissentiet eu. Doctus nominati pericula ut his.
                            </p>
                            <p className="article_block_preview_description">Eu usu verear eruditi dolorem. Qui eu zril
                                tibique fabellas. Ut eius neglegentur nec, ne dolore soluta eos, eu veri habemus
                                urbanitas mea. Et quot adolescens vim. Est populo tractatos explicari ut, minim everti
                                has id, ne quo aliquam officiis
                                assueverit.
                            </p>
                        </article>
                    </div>
                </div>
                <div className="article_block_preview_wrapper col-12 col-md-6 col-lg-6 col-xl-4">
                    <div className="article_block_preview">
                        <div className="article_block_preview_header">
                            <div className="article_block_preview_date_img_block">
                                <div className="article_block_preview_date">
                  <span className="article_block_preview_date_wrapper">
                <span className="article_block_preview_date_number">02</span><br/>март
                  </span>
                                </div>
                                <div className="article_block_preview_img">
                                    <img src={STATIC_PATH + "/img/authors/author2.jpg"} alt="img"/>
                                </div>
                            </div>
                            <div className="article_block_preview_name">
                                <h2>Lorem ipsum</h2>
                                <div className="article_block_preview_count_open"><i className="icon-rocket"/>24</div>
                                <div className="article_block_preview_count_comment"><i className="icon-bubble2"/>32
                                </div>
                            </div>
                        </div>
                        <article className="article_block_preview_description_wrapper">
                            <h3 className="article_block_preview_title">Lorem ipsum dolor sit amet, ut mei agam
                                assueverit</h3>
                            <p className="article_block_preview_short">Ea facilisi honestatis sea. An aperiam salutandi
                                nam. Sea harum maiorum dissentiet eu. Doctus nominati pericula ut his.
                            </p>
                            <p className="article_block_preview_description">Eu usu verear eruditi dolorem. Qui eu zril
                                tibique fabellas. Ut eius neglegentur nec, ne dolore soluta eos, eu veri habemus
                                urbanitas mea. Et quot adolescens vim. Est populo tractatos explicari ut, minim everti
                                has id, ne quo aliquam officiis
                                assueverit.
                            </p>
                        </article>
                    </div>
                </div>
                <div className="article_block_preview_wrapper col-12 col-md-6 col-lg-6 col-xl-4">
                    <div className="article_block_preview">
                        <div className="article_block_preview_header">
                            <div className="article_block_preview_date_img_block">
                                <div className="article_block_preview_date">
                  <span className="article_block_preview_date_wrapper">
                <span className="article_block_preview_date_number">02</span><br/>март
                  </span>
                                </div>
                                <div className="article_block_preview_img">
                                    <img src={STATIC_PATH + "/img/authors/author3.jpg"} alt="img"/>
                                </div>
                            </div>
                            <div className="article_block_preview_name">
                                <h2>Lorem ipsum</h2>
                                <div className="article_block_preview_count_open"><i className="icon-rocket"/>24</div>
                                <div className="article_block_preview_count_comment"><i className="icon-bubble2"/>32
                                </div>
                            </div>
                        </div>
                        <article className="article_block_preview_description_wrapper">
                            <h3 className="article_block_preview_title">Lorem ipsum dolor sit amet, ut mei agam
                                assueverit</h3>
                            <p className="article_block_preview_short">Ea facilisi honestatis sea. An aperiam salutandi
                                nam. Sea harum maiorum dissentiet eu. Doctus nominati pericula ut his.
                            </p>
                            <p className="article_block_preview_description">Eu usu verear eruditi dolorem. Qui eu zril
                                tibique fabellas. Ut eius neglegentur nec, ne dolore soluta eos, eu veri habemus
                                urbanitas mea. Et quot adolescens vim. Est populo tractatos explicari ut, minim everti
                                has id, ne quo aliquam officiis
                                assueverit.
                            </p>
                        </article>
                    </div>
                </div>
                <div className="article_block_preview_wrapper col-12 col-md-6 col-lg-6 col-xl-4">
                    <div className="article_block_preview">
                        <div className="article_block_preview_header">
                            <div className="article_block_preview_date_img_block">
                                <div className="article_block_preview_date">
                  <span className="article_block_preview_date_wrapper">
                <span className="article_block_preview_date_number">02</span><br/>март
                  </span>
                                </div>
                                <div className="article_block_preview_img">
                                    <img src={STATIC_PATH + "/img/authors/author3.jpg"} alt="img"/>
                                </div>
                            </div>
                            <div className="article_block_preview_name">
                                <h2>Lorem ipsum</h2>
                                <div className="article_block_preview_count_open"><i className="icon-rocket"/>24</div>
                                <div className="article_block_preview_count_comment"><i className="icon-bubble2"/>32
                                </div>
                            </div>
                        </div>
                        <article className="article_block_preview_description_wrapper">
                            <h3 className="article_block_preview_title">Lorem ipsum dolor sit amet, ut mei agam
                                assueverit</h3>
                            <p className="article_block_preview_short">Ea facilisi honestatis sea. An aperiam salutandi
                                nam. Sea harum maiorum dissentiet eu. Doctus nominati pericula ut his.
                            </p>
                            <p className="article_block_preview_description">Eu usu verear eruditi dolorem. Qui eu zril
                                tibique fabellas. Ut eius neglegentur nec, ne dolore soluta eos, eu veri habemus
                                urbanitas mea. Et quot adolescens vim. Est populo tractatos explicari ut, minim everti
                                has id, ne quo aliquam officiis
                                assueverit.
                            </p>
                        </article>
                    </div>
                </div>
                <div className="article_block_preview_wrapper col-12 col-md-6 col-lg-6 col-xl-4">
                    <div className="article_block_preview">
                        <div className="article_block_preview_header">
                            <div className="article_block_preview_date_img_block">
                                <div className="article_block_preview_date">
                  <span className="article_block_preview_date_wrapper">
                <span className="article_block_preview_date_number">02</span><br/>март
                  </span>
                                </div>
                                <div className="article_block_preview_img">
                                    <img src={STATIC_PATH + "/img/authors/author5.jpg"} alt="img"/>
                                </div>
                            </div>
                            <div className="article_block_preview_name">
                                <h2>Lorem ipsum</h2>
                                <div className="article_block_preview_count_open"><i className="icon-rocket"/>24</div>
                                <div className="article_block_preview_count_comment"><i className="icon-bubble2"/>32
                                </div>
                            </div>
                        </div>
                        <article className="article_block_preview_description_wrapper">
                            <h3 className="article_block_preview_title">Lorem ipsum dolor sit amet, ut mei agam
                                assueverit</h3>
                            <p className="article_block_preview_short">Ea facilisi honestatis sea. An aperiam salutandi
                                nam. Sea harum maiorum dissentiet eu. Doctus nominati pericula ut his.
                            </p>
                            <p className="article_block_preview_description">Eu usu verear eruditi dolorem. Qui eu zril
                                tibique fabellas. Ut eius neglegentur nec, ne dolore soluta eos, eu veri habemus
                                urbanitas mea. Et quot adolescens vim. Est populo tractatos explicari ut, minim everti
                                has id, ne quo aliquam officiis
                                assueverit.
                            </p>
                        </article>
                    </div>
                </div>
                <div className="article_block_preview_wrapper col-12 col-md-6 col-lg-6 col-xl-4">
                    <div className="article_block_preview">
                        <div className="article_block_preview_header">
                            <div className="article_block_preview_date_img_block">
                                <div className="article_block_preview_date">
                  <span className="article_block_preview_date_wrapper">
                <span className="article_block_preview_date_number">02</span><br/>март
                  </span>
                                </div>
                                <div className="article_block_preview_img">
                                    <img src={STATIC_PATH + "/img/authors/author6.jpg"} alt="img"/>
                                </div>
                            </div>
                            <div className="article_block_preview_name">
                                <h2>Lorem ipsum</h2>
                                <div className="article_block_preview_count_open"><i className="icon-rocket"/>24</div>
                                <div className="article_block_preview_count_comment"><i className="icon-bubble2"/>32
                                </div>
                            </div>
                        </div>
                        <article className="article_block_preview_description_wrapper">
                            <h3 className="article_block_preview_title">Lorem ipsum dolor sit amet, ut mei agam
                                assueverit</h3>
                            <p className="article_block_preview_short">Ea facilisi honestatis sea. An aperiam salutandi
                                nam. Sea harum maiorum dissentiet eu. Doctus nominati pericula ut his.
                            </p>
                            <p className="article_block_preview_description">Eu usu verear eruditi dolorem. Qui eu zril
                                tibique fabellas. Ut eius neglegentur nec, ne dolore soluta eos, eu veri habemus
                                urbanitas mea. Et quot adolescens vim. Est populo tractatos explicari ut, minim everti
                                has id, ne quo aliquam officiis
                                assueverit.
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </div>
        <div className="add_more container justify-content-center">
            <button type="button" className="btn btn-secondary add_more_button">Подгрузить еще</button>
        </div>
    </div>;

export default injectSheet(styles)(Articles);
