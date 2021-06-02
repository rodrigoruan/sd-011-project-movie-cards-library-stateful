import React from 'react';

const InputTitle = () => (
  <label
    htmlFor="title-input"
    data-testid="title-input-label"
  >
    Título
    <input
      type="text"
      value="title"
      data-testid="title-input"
      onChange={ title }
    />
  </label>
);

export default InputTitle;
