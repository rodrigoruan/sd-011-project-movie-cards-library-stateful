import React, { Component } from 'react';

class InputNumber extends Component {
  render() {
    const {
      inputValue,
      inputFunction,
    } = this.props;
    return (
      <label labelData="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          data-testid="rating-input"
          value={ inputValue }
          onChange={ inputFunction }
        />
        <br />
      </label>

    );
  }
}

export default InputNumber;
