import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LabelNumber extends Component {
  render() {
    const { id, name, idInput, nameInput, valueInput, funcInput } = this.props;
    return (
      <label data-testid={ id } htmlFor={ nameInput }>
        { name }
        <input
          type="number"
          data-testid={ idInput }
          name={ nameInput }
          value={ valueInput }
          onChange={ funcInput }
        />
      </label>
    );
  }
}

export default LabelNumber;

LabelNumber.propTypes = {
  id: PropTypes.string.isRequired,
  valueInput: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nameInput: PropTypes.string.isRequired,
  idInput: PropTypes.string.isRequired,
  funcInput: PropTypes.func.isRequired,
};
