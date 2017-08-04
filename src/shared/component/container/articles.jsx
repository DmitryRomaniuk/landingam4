// @flow

import React from 'react';
import { connect } from 'react-redux';
import Article from '../article';

const Articles = ({ articles }: { articles: Array<Object> }) => (
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
        {articles.map((elem) => {
            const article = Object.assign({}, elem);
                        // eslint-disable-next-line no-underscore-dangle
            delete article._id;
                        // return article;
            return (<Article
              key={article.title}
              title={article.title}
              description={article.description}
              text={article.text}
              avatarUrl={article.avatarUrl}
              likes={article.likes}
              comments={article.comments}
              date={article.date}
              author={article.author}
            />);
        })
                    }
      </div>
    </div>
    <div className="add_more container justify-content-center">
      <button
        type="button" role="button" data-toggle="modal" data-target=".js-modal-form"
        className="btn btn-secondary add_more_button"
      >Подгрузить еще
                </button>
    </div>
  </div>);


const mapStateToProps = state => ({
    articles: state.articles.get('listArticles').toJS(),
});

export default connect(mapStateToProps)(Articles);
