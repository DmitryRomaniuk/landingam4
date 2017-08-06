// @flow


export default (values) => {
    const errors = {};
    if (!values.title) {
        errors.title = 'Required';
    } else if (values.title.length > 15) {
        errors.title = 'Must be 15 characters or less';
    }
    if (!values.description) {
        errors.description = 'Required';
    } else if (values.description.length > 15) {
        errors.description = 'Must be 15 characters or less';
    }
    if (!values.text) {
        errors.text = 'Required';
    } else if (values.text.length > 150) {
        errors.text = 'Must be 150 characters or less';
    }
    if (!values.avatarUrl) {
        errors.avatarUrl = 'Required';
        // eslint-disable-next-line no-useless-escape
    } else if (!/^((http|https)\:\/\/)?[a-zA-Z0-9\.\/\?\:@\-_=#]+\.([a-zA-Z0-9\&\.\/\?\:@\-_=#])*$/i.test(values.avatarUrl)) {
        errors.avatarUrl = 'Invalid url address';
    }
    if (!values.author) {
        errors.author = 'Required';
    } else if (values.author.length > 15) {
        errors.author = 'Must be 15 characters or less';
    }
    // if (!values.email) {
    //     errors.email = 'Required';
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //     errors.email = 'Invalid email address';
    // }
    // if (!values.age) {
    //     errors.age = 'Required';
    // } else if (isNaN(Number(values.age))) {
    //     errors.age = 'Must be a number';
    // } else if (Number(values.age) < 18) {
    //     errors.age = 'Sorry, you must be at least 18 years old';
    // }
    return errors;
};
