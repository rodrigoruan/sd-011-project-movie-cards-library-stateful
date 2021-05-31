import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LabelFile extends Component {
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

LabelFile.propTypes = {
  data: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nameInput: PropTypes.string.isRequired,
  dataInput: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};
