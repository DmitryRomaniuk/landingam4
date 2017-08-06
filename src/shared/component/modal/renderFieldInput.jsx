// @flow

import React from 'react';

export default ({ input, label, type, meta: { touched, error, warning } }: {
    input: string, label: string, type: string, meta: Object
}) => (
  <div>
    <label>
      {label}
    </label>
    <div>
      <input {...input} placeholder={label} type={type} className="form-control" />
      {touched && ((error && <span> {error} </span>) || (warning && <span> {warning} </span>))}
    </div>
  </div>);
