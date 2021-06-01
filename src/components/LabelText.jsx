import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LabelText extends Component {
  render() {
    const { idInput, inputValue, inputName, handleState, textValue, labelD } = this.props;
    return (
      <label htmlFor={ idInput } data-testid={ labelD }>
        {textValue}
        <input
          type="text"
          value={ inputValue }
          data-testid={ idInput }
          id={ idInput }
          name={ inputName }
          onChange={ handleState }
        />
      </label>
    );
  }
}

LabelText.propTypes = {
  idInput: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  handleState: PropTypes.func.isRequired,
  textValue: PropTypes.string.isRequired,
  labelD: PropTypes.string.isRequired,
};
