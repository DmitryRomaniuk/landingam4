// @flow

import React from 'react';
import { Field, reduxForm } from 'redux-form';

const ArticlesForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
      <form onSubmit={handleSubmit} className="js-modal-form modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add article</h5>
              <button type="button" className="close" data-dismiss="modal">×</button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <div>
                  <label htmlFor="titleInput">title</label>
                  <div>
                    <Field
                      id="titleInput"
                      className="form-control"
                      name="title"
                      component="input"
                      type="text"
                      placeholder="Title"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div>
                  <label htmlFor="descriptionInput">description</label>
                  <div>
                    <Field
                      id="descriptionInput"
                      className="form-control"
                      name="description"
                      component="input"
                      type="text"
                      placeholder="description"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div>
                  <label htmlFor="textInput">text</label>
                  <div>
                    <Field
                      id="textInput"
                      className="form-control"
                      name="text"
                      component="textarea"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div>
                  <label htmlFor="avatarUrlInput">avatarUrl</label>
                  <div>
                    <Field
                      id="avatarUrlInput"
                      className="form-control"
                      name="avatarUrl"
                      component="input"
                      type="file"
                      placeholder="avatarUrl"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div>
                  <label htmlFor="authorInput">author</label>
                  <div>
                    <Field
                      id="authorInput"
                      className="form-control"
                      name="author"
                      component="input"
                      type="text"
                      placeholder="author"
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" role="button" className="btn btn-success" data-dismiss="modal" disabled={pristine || submitting}>
                    Submit
                  </button>
                <button type="button" role="button" className="btn btn-warning" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                  </button>
                <button type="button" role="button" className="btn btn-primary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
};

export default reduxForm({
    form: 'articles',
})(ArticlesForm);
