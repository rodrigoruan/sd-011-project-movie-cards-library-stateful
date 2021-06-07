import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTextForm extends Component {
  render() {
    const {
      text,
      name,
      value,
      onChange } = this.props;

    const id = name.startsWith('image') ? 'image-input' : `${name}-input`;
    const htmlFor = id;
    const dataTestid = id;
    const dataTestidLabel = `${id}-label`;
    const type = 'text';

    return (
      <label
        htmlFor={ htmlFor }
        data-testid={ dataTestidLabel }
      >
        { text }
        <input
          id={ id }
          name={ name }
          type={ type }
          value={ value }
          onChange={ onChange }
          data-testid={ dataTestid }
        />
      </label>
    );
  }
}

InputTextForm.propTypes = {
  htmlFor: PropTypes.string,
  dataTestidLabel: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  dataTestid: PropTypes.string,
}.isRequired;

export default InputTextForm;
