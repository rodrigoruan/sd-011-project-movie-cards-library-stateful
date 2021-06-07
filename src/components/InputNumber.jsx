import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputNumber extends Component {
  render() {
    const { data, name, value, nameInput, func, dataInput } = this.props;
    return (
      <label data-testid={ data } htmlFor={ nameInput }>
        {name}
        <input
          type="number"
          value={ value }
          name={ nameInput }
          data-testid={ dataInput }
          onChange={ func }
        />
      </label>
    );
  }
}

InputNumber.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  nameInput: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  dataInput: PropTypes.string.isRequired,
};
