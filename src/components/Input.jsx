import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { label, name, type, value, onChange } = this.props;
    const id = name === 'imagePath' ? 'image' : name;
    return (
      <label htmlFor={ name } data-testid={ `${id}-input-label` }>
        { label }
        <input
          type={ type }
          name={ name }
          data-testid={ `${id}-input` }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
