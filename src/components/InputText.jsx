import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputText extends Component {
  render() {
    const { data, value, name, nameInput, dataInput, func } = this.props;
    return (
      <label data-testid={ data } htmlFor={ nameInput }>
        {name}
        <input
          type="text"
          value={ value }
          name={ nameInput }
          data-testid={ dataInput }
          onChange={ func }
        />
      </label>
    );
  }
}

InputText.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  nameInput: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  dataInput: PropTypes.string.isRequired,
};
