// @flow
/* global $ */

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import warn from './warn';
import submit from './submit';
import renderFieldInput from './renderFieldInput';
import renderFieldTextArea from './renderFieldTextArea';
import { articleAddAction } from '../../action/articles';

function onSubmit(values, dispatch, reset) {
    values.date = values.date || Date.now();
    values.likes = values.likes || 0;
    values.comments = values.comments || 0;
  // flow-disable-next-line
    $('.js-modal-form .close').click();
    const resultSubmit = submit(values);
    if (resultSubmit === 'submited') {
        dispatch(articleAddAction(values));
        return dispatch(reset());
    } else {
        return resultSubmit;
    }
}

const ArticlesForm = ({ handleSubmit, pristine, reset, error, submitting, onSubmit }: {
  handleSubmit: Function, pristine: boolean, error: ?boolean, reset: Function, onSubmit: Function, submitting: boolean
}) => (
  <form onSubmit={handleSubmit((values, dispatch) => onSubmit(values, dispatch, reset))} className="js-modal-form modal fade">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Article</h5>
          <button type="button" className="close" data-dismiss="modal">×</button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <div>
              <Field
                id="titleInput"
                label="Title"
                className="form-control"
                name="title"
                component={renderFieldInput}
                type="text"
                placeholder="Title"
              />
            </div>
          </div>
          <div className="form-group">
            <div>
              <Field
                id="descriptionInput"
                label="Description"
                className="form-control"
                name="description"
                component={renderFieldInput}
                type="text"
                placeholder="Description"
              />
            </div>
          </div>
          <div className="form-group">
            <div>
              <Field
                id="textInput"
                label="Text"
                className="form-control"
                name="text"
                type="text"
                component={renderFieldTextArea}
              />
            </div>
          </div>
          <div className="form-group">
            <div>
              <Field
                id="avatarUrlInput"
                label="Avatar Url"
                className="form-control"
                name="avatarUrl"
                component={renderFieldInput}
                type="url"
                placeholder="avatarUrl"
                required
                pattern="((http|https)\:\/\/)?[a-zA-Z0-9\.\/\?\:@\-_=#]+\.([a-zA-Z0-9\&\.\/\?\:@\-_=#])*"
                minlength="5"
                maxlength="140"
              />
            </div>
          </div>
          <div className="form-group">
            <div>
              <Field
                id="authorInput"
                label="Author"
                className="form-control"
                name="author"
                component={renderFieldInput}
                type="text"
                placeholder="author"
                required
                minlength="5"
                maxlength="30"
              />
            </div>
          </div>
          {error && <strong> {error} </strong>}
          <div className="modal-footer">
            <button type="submit" role="button" className="btn btn-success" disabled={submitting}>
                    Submit
                  </button>
            <button
              type="button" role="button" className="btn btn-warning" disabled={pristine || submitting}
              onClick={reset}
            >
                    Clear Values
                  </button>
            <button type="button" role="button" className="btn btn-primary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </form>
    );

export default reduxForm({
    form: 'addArticle',
    validate,
    warn,
    onSubmit,
})(ArticlesForm);
