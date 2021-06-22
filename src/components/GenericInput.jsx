import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GenericInput extends Component {
  render() {
    const { labelDataTestId, labelText } = this.props;
    const { inputName, inputDataTestId, inputValue, handleChange } = this.props;
    return (
      <label htmlFor={ inputName } data-testid={ labelDataTestId }>
        { labelText }
        <input
          name={ inputName }
          data-testid={ inputDataTestId }
          value={ inputValue }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

GenericInput.propTypes = {
  labelDataTestId: PropTypes.string,
  labelText: PropTypes.string,
  inputName: PropTypes.string,
  inputDataTestId: PropTypes.string,
  inputValue: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default GenericInput;
