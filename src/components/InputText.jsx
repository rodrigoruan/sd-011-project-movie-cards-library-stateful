import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Inputs extends Component {
  render() {
    const {
      labelData,
      labelText,
      inputData,
      inputValue,
      inputName,
      inputFunction,
    } = this.props;
    return (
      <label data-testid={ labelData } htmlFor={ inputData }>
        {labelText}
        <input
          name={ inputName }
          type="text"
          data-testid={ inputData }
          value={ inputValue }
          onChange={ inputFunction }
        />
        <br />
      </label>
    );
  }
}
Inputs.propTypes = {
  labelData: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  inputData: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputFunction: PropTypes.func.isRequired,
};

export default Inputs;
