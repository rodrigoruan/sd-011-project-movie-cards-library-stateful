import React from 'react';
import PropTypes from 'prop-types';

class InputNumber extends React.Component {
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
          type="number"
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

InputNumber.propTypes = {
  labelText: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputNumber;
