// @flow

import React from 'react';
import moment from 'moment';
import DeleteArticleButton from './delete-article-button';

function getMonth(date) {
    const month = moment(date, 'x').format('MMMM');
    return (month === 'Invalid date') ? '' : month;
}

const Article = ({ title, description, text, avatarUrl, likes, comments, date, author, articleRemoveByNumber, index }: {
    title: string, description: string, text: string, avatarUrl: string,
    likes: number, comments: number, date: number, author: string, articleRemoveByNumber: Function, index: number
}) => <div className="article_block_preview_wrapper col-12 col-md-6 col-lg-6 col-xl-4">
  <div className="article_block_preview">
    <div className="article_block_preview_header">
      <div className="article_block_preview_date_img_block">
        <div className="article_block_preview_date">
          <span className="article_block_preview_date_wrapper">
            <span className="article_block_preview_date_number">{moment(date, 'x').date() || ''}</span>
            <br />{getMonth(date)}
          </span>
        </div>
        <div className="article_block_preview_img">
          <img src={avatarUrl} alt="img" />
        </div>
      </div>
      <div className="article_block_preview_name">
        <h2>{title}</h2>
        <div className="article_block_preview_count_open"><i className="icon-rocket" />{likes}</div>
        <div className="article_block_preview_count_comment"><i className="icon-bubble2" />{comments}
        </div>
      </div>
    </div>
    <article className="article_block_preview_description_wrapper">
      <h3 className="article_block_preview_title">{description}</h3>
      <p className="article_block_preview_short">
        {author}
      </p>
      <p className="article_block_preview_description">
        {text}
      </p>
      <button
        className="article_block_edit" data-toggle="modal"
        data-target=".js-modal-form"
      >Edit</button>
      <DeleteArticleButton
        className="article_block_delete"
        ifClick={() => { articleRemoveByNumber(index); }}
      >Delete</DeleteArticleButton>
    </article>
  </div>
</div>;

export default Article;
