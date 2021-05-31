import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LabelNumber extends Component {
  render() {
    const { data, name, value, nameInput, func, dataInput } = this.props;
    return (
      <label data-testid={ data } htmlFor={ nameInput }>
        {name}
        <input
          type="Number"
          value={ value }
          name={ nameInput }
          data-testid={ dataInput }
          onChange={ func }
        />
      </label>
    );
  }
}

LabelNumber.propTypes = {
  data: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nameInput: PropTypes.string.isRequired,
  dataInput: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};
