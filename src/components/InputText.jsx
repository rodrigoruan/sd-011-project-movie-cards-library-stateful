import React, { Component } from 'react';

class Inputs extends Component {
  render() {
    const {
      labelData,
      labelText,
      inputData,
      inputValue,
      inputName,
      inputFunction
    } = this.props;
    return (
      <label
        data-testid={ labelData }
        htmlFor={ inputData }
      >
        { labelText }
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

export default Inputs;
