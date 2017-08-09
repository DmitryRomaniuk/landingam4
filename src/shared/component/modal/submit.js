// @flow
/* global $ */

import { SubmissionError } from 'redux-form';

export default (values: { title: string, description: string, text: string, avatarUrl: string, author: string }) => {
    console.log(values);
    if (!values.title) {
        return new SubmissionError({
            username: 'Title is empty',
            _error: 'Fill the form, please!',
        });
    } else if (values.title.length > 150) {
        return new SubmissionError({
            username: 'Must be 150 characters or less',
            _error: 'Fill the form, please!',
        });
    } else if (!values.description) {
        return new SubmissionError({
            username: 'Description is empty',
            _error: 'Fill the form, please!',
        });
    } else if (values.description.length > 150) {
        return new SubmissionError({
            username: 'Must be 150 characters or less',
            _error: 'Fill the form, please!',
        });
    } else if (!values.text) {
        return new SubmissionError({
            username: 'Text field is empty',
            _error: 'Fill the form, please!',
        });
    } else if (values.text.length > 1500) {
        return new SubmissionError({
            username: 'Must be 1500 characters or less',
            _error: 'Fill the form, please!',
        });
    } else if (!values.avatarUrl) {
        return new SubmissionError({
            username: 'Avatar url is empty',
            _error: 'Fill the form, please!',
        });
        // eslint-disable-next-line no-useless-escape
    } else if (!/^((http|https)\:\/\/)?[a-zA-Z0-9\.\/\?\:@\-_=#]+\.([a-zA-Z0-9\&\.\/\?\:@\-_=#])*$/i.test(values.avatarUrl)) {
        return new SubmissionError({
            username: 'Invalid url address',
            _error: 'Fill the form, please!',
        });
    } else if (!values.author) {
        return new SubmissionError({
            username: 'Author is empty',
            _error: 'Fill the form, please!',
        });
    } else if (values.author.length > 150) {
        return new SubmissionError({
            username: 'Must be 150 characters or less',
            _error: 'Fill the form, please!',
        });
    }
    // flow-disable-next-line
    $('.js-modal-form .close').click();
    return 'submited';
};
