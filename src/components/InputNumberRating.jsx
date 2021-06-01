import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputNumber extends Component {
  render() {
    const {
      inputValue,
      inputFunction,
    } = this.props;
    return (
      <label
        htmlFor="rating-input"
        data-testid="rating-input-label"
      >
        Avaliação
        <input
          name="rating"
          type="number"
          data-testid="rating-input"
          value={ inputValue }
          onChange={ inputFunction }
        />
      </label>
    );
  }
}

InputNumber.propTypes = {
  inputValue: PropTypes.number.isRequired,
  inputFunction: PropTypes.func.isRequired,
};

export default InputNumber;
