import React, { Component } from 'react';

class InputNumber extends Component {
  render() {
    const {
      inputValue,
      inputFunction,
    } = this.props;
    return (
      <label
        htmlFor="rating-input"
        labelData="rating-input-label"
      >
        Avaliação
        <input
          name="rating"
          type="number"
          data-testid="rating-input"
          value={ Number(inputValue) }
          onChange={ inputFunction }
        />
        <br />
      </label>

    );
  }
}

export default InputNumber;
