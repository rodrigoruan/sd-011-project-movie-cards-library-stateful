import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputSelectOptionForm from './InputSelectOptionForm';

class InputSelectForm extends Component {
  render() {
    const {
      text,
      name,
      value,
      onChange,
      optionsData } = this.props;

    const id = `${name}-input`;
    const htmlFor = id;
    const dataTestid = id;
    const dataTestidLabel = `${id}-label`;

    return (
      <label
        htmlFor={ htmlFor }
        data-testid={ dataTestidLabel }
      >
        { text }
        <select
          id={ id }
          name={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ dataTestid }
        >
          {Object.entries(optionsData).map(
            ([optionValue, optionText]) => (
              <InputSelectOptionForm
                key={ optionValue }
                text={ optionText }
                value={ optionValue }
                dataTestid={ `${name}-option` }
              />),
          )}
        </select>
      </label>
    );
  }
}

InputSelectForm.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  optionsData: PropTypes.shape({
    action: PropTypes.string,
    comedy: PropTypes.string,
    thriller: PropTypes.string,
  }),
}.isRequired;

export default InputSelectForm;
