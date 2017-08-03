// @flow

import React from 'react';
import injectSheet from 'react-jss';
import Article from '../article';
import {STATIC_PATH} from '../../config';

const styles = {};

const Articles = ({articles, classes}: { articles: Array<mixed>, classes: Object }) =>
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
                {  articles.map((elem) => {
                    const article = Object.assign({}, elem);
                    // eslint-disable-next-line no-underscore-dangle
                    delete article._id;
                    // return article;
                    return <Article title={article.title}
                                    description={article.description}
                                    text={article.text}
                                    avatarUrl={article.avatarUrl}
                                    likes={article.likes}
                                    comments={article.comments}
                                    date={article.date}
                                    author={article.author} />
                })
                }
            </div>
        </div>
        <div className="add_more container justify-content-center">
            <button type="button" className="btn btn-secondary add_more_button">Подгрузить еще</button>
        </div>
    </div>;

export default injectSheet(styles)(Articles);
