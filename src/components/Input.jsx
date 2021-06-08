import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      labelText,
      labelDataTestId,
      inputType,
      inputName,
      inputValue,
      inputChecked,
      inputOnChange,
      inputDataTestId,
    } = this.props;
    return (
      <label
        htmlFor={ inputName }
        data-testid={ labelDataTestId }
      >
        { labelText }
        <input
          type={ inputType }
          id={ inputName }
          name={ inputName }
          value={ inputValue }
          checked={ inputChecked }
          onChange={ inputOnChange }
          data-testid={ inputDataTestId }
        />
      </label>
    );
  }
}

Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  labelDataTestId: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputValue: PropTypes.string,
  inputChecked: PropTypes.bool,
  inputOnChange: PropTypes.func.isRequired,
  inputDataTestId: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
};

Input.defaultProps = {
  inputValue: '',
  inputChecked: false,
};

export default Input;
