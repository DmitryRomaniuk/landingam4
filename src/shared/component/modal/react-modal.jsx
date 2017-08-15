// @flow
/* global $ */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import warn from './warn';
import submit from './submit';
import renderFieldInput from './renderFieldInput';
import renderFieldTextArea from './renderFieldTextArea';
import { articleFormAdd, articleAddAction, articleFormToggleSwitch } from '../../action/articles';

class ArticlesForm extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    onSubmit(values, dispatch) {
        values.date = values.date || Date.now();
        values.likes = values.likes || 0;
        values.comments = values.comments || 0;
        // flow-disable-next-line
        $('.modal-dialog .close').click();
        // ToDo: create action for close modal
        const resultSubmit = submit(values);
        if (resultSubmit === 'submited') {
            dispatch(articleAddAction(values));
            return this.props.reset();
        }
        return resultSubmit;
    }

    onClose() {
        // flow-disable-next-line
        this.props.reset();
        $('.modal-dialog .close').click();
        // ToDo: create action for close modal
    }

    toggle() {
        this.props.articleFormToggleSwitch();
    }

    render() {
        return (
          <div>
            <Modal isOpen={this.props.modal} toggle={this.toggle} className={this.props.className}>
              <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="">
                <ModalHeader toggle={this.toggle}>Article</ModalHeader>
                <ModalBody>
                  <div className="">
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
                    {this.props.error && <strong> {this.props.error} </strong>}
                  </div>
                </ModalBody>
                <ModalFooter>
                  <button
                    type="submit" role="button" className="btn btn-success"
                    disabled={this.props.submitting}
                  >
                                Submit
                            </button>
                  <button
                    type="button" role="button" className="btn btn-warning"
                    disabled={this.props.pristine || this.props.submitting}
                    onClick={this.props.reset}
                  >
                                Undo Changes
                            </button>
                  <button type="button" role="button" className="btn btn-primary" onClick={this.onClose}>
                                Close
                            </button>
                </ModalFooter>
              </form>
              <div className="before-all-modal">
                <div className="sk-circle">
                  <div className="sk-circle1 sk-child" />
                  <div className="sk-circle2 sk-child" />
                  <div className="sk-circle3 sk-child" />
                  <div className="sk-circle4 sk-child" />
                  <div className="sk-circle5 sk-child" />
                  <div className="sk-circle6 sk-child" />
                  <div className="sk-circle7 sk-child" />
                  <div className="sk-circle8 sk-child" />
                  <div className="sk-circle9 sk-child" />
                  <div className="sk-circle10 sk-child" />
                  <div className="sk-circle11 sk-child" />
                  <div className="sk-circle12 sk-child" />
                </div>
              </div>
            </Modal>
          </div>
        );
    }
}


ArticlesForm.propTypes = {
    handleSubmit: PropTypes.func,
    pristine: PropTypes.bool,
    reset: PropTypes.func,
    error: PropTypes.bool,
    submitting: PropTypes.bool,
    onSubmit: PropTypes.bool,
    isOpen: PropTypes.bool,
    articleFormToggleSwitch: PropTypes.func,
    // boolean to control the state of the popover
    toggle: PropTypes.func,
    // callback for toggling isOpen in the controlling component
    size: PropTypes.string,
    // control backdrop, see http://v4-alpha.getbootstrap.com/components/modal/#options
    backdrop: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(['static']),
    ]),
    keyboard: PropTypes.bool,
    // zIndex defaults to 1000.
    zIndex: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    className: PropTypes.string,
    wrapClassName: PropTypes.string,
    modalClassName: PropTypes.string,
    backdropClassName: PropTypes.string,
    contentClassName: PropTypes.string,
};

const mapStateToProps = state => ({
    modal: state.articles.get('modal'),
    modalSpinner: state.articles.get('modalSpinner'),
    initialValues: state.articles.get('listArticles').toJS()[state.articles.get('number')],
});

export default connect(mapStateToProps, { articleFormAdd, articleAddAction, articleFormToggleSwitch })(reduxForm({
    form: 'addArticle',
    validate,
    warn,
    enableReinitialize: true,
})(ArticlesForm));
