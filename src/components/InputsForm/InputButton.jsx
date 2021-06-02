import React from 'react';

const Button = () => (
  <button
    type="submit"
    onClick={ OnClick }
    data-testid="send-button"
  >
    Adicionar filme
  </button>
);

export default Button;
