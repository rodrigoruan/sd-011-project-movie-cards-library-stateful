import React from 'react';
import PropTypes from 'prop-types';

class InputText extends React.Component {
  render() {
    const {
      labelText,
      dataTestId,
      name,
      value,
      onChange,
    } = this.props;
    return (
      <label
        htmlFor={ name }
        data-testid={ `${dataTestId}-label` }
      >
        { labelText }
        <input
          type="text"
          id={ name }
          name={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ dataTestId }
        />
      </label>
    );
  }
}

InputText.propTypes = {
  labelText: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputText;
