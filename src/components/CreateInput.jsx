import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CreateInput extends Component {
  render() {
    const { name, value, handleUserInput } = this.props;
    let description;
    let testId = name;
    switch (name) {
    case 'title':
      description = 'Título';
      break;
    case 'subtitle':
      description = 'Subtítulo';
      break;
    default:
      description = 'Imagem';
      testId = 'image';
      break;
    }
    return (
      <label htmlFor={ name } data-testid={ `${testId}-input-label` }>
        {description}
        <input
          data-testid={ `${testId}-input` }
          type="text"
          name={ name }
          value={ value }
          onChange={ handleUserInput }
        />
      </label>
    );
  }
}

CreateInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleUserInput: PropTypes.func.isRequired,
};
