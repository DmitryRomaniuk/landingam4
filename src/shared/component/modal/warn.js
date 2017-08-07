// @flow

export default (values: { age: number }) => {
    const warnings = {};
    if (values.age < 19) {
        warnings.age = 'Hmm, you seem a bit young...';
    }
    return warnings;
};
