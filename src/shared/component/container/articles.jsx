// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { articleGetAsync, articleRemoveByNumber, articleFormToggleSwitch, articleEditByNumber } from '../../action/articles';
import Article from '../article';

class Articles extends Component {
    static defaultProps: Object;

    constructor(props) {
        super(props);
        this.addArticleEmpty = this.addArticleEmpty.bind(this);
    }

    componentDidMount() {
        this.props.articleGetAsync();
    }

    addArticleEmpty() {
        this.props.articleFormToggleSwitch();
        this.props.articleEditByNumber(this.props.articles.length);
    }

    render() {
        return (<div className="articles">
          <div className="container">
            <div className="chapter_header articles_head">
              <div className="chapter_title articles_title">
                <span className="chapter_title_name articles_title_name">Статьи</span>
                <a className="chapter_title_all articles_title_all" href="#">
                  <span className="chapter_title_name_span articles_title_name_span">Все&nbsp;статьи</span>
                </a>
              </div>
              <button
                className="btn btn-secondary add_more_button add_article"
                data-toggle="modal"
                data-target=".js-modal-form"
                onClick={this.addArticleEmpty}
              >Добавить статью&nbsp;
                        <strong>+</strong></button>
            </div>
            <div className="articles_main row">
              {this.props.articles.map((elem, index) => {
                  const article = Object.assign({}, elem);
                  // eslint-disable-next-line no-underscore-dangle
                  delete article._id;
                  return (<Article
                    key={article.date}
                    title={article.author}
                    description={article.description}
                    text={article.text}
                    avatarUrl={article.avatarUrl}
                    likes={article.likes}
                    comments={article.comments}
                    date={article.date}
                    author={article.title}
                    index={index}
                    articleRemoveByNumber={this.props.articleRemoveByNumber}
                    articleEditByNumber={this.props.articleEditByNumber}
                    articleFormToggleSwitch={this.props.articleFormToggleSwitch}
                  />);
              })}
            </div>
          </div>
          <div className="add_more container justify-content-center">
            <button
              type="button" role="button"
              className="btn btn-secondary add_more_button"
            >Подгрузить еще
                </button>
          </div>
        </div>);
    }
}


Articles.propTypes = {
    // eslint-disable-next-line react/require-default-props
    articleGetAsync: PropTypes.func,
    // eslint-disable-next-line react/require-default-props
    articleRemoveByNumber: PropTypes.func,
    articles: PropTypes.any,
};

Articles.defaultProps = {
    articles: [
        {
            title: '',
            description: '',
            text: '',
            avatarUrl: '',
            likes: 0,
            comments: 0,
            date: 0,
            author: '',
        },
    ],
};


const mapStateToProps = state => ({
    articles: state.articles.get('listArticles').toJS(),
});

export default connect(mapStateToProps, {
    articleGetAsync, articleRemoveByNumber, articleFormToggleSwitch, articleEditByNumber,
})(Articles);
