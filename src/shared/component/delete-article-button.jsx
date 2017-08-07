// @flow

import React from 'react';

const DeleteButton = ({ ifClick }: { ifClick: Function}) =>
  <button
    onClick={() => { ifClick(); }}
    className="article_block_delete"
    type="button"
    role="button"
  >Delete</button>;

export default DeleteButton;
