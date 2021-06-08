import React from 'react';
import PropTypes from 'prop-types';

class InputCheckbox extends React.Component {
  render() {
    const {
      labelText,
      dataTestId,
      name,
      checked,
      onChange,
    } = this.props;
    return (
      <label
        htmlFor={ name }
        data-testid={ `${dataTestId}-label` }
      >
        { labelText }
        <input
          type="checkbox"
          id={ name }
          name={ name }
          checked={ checked }
          onChange={ onChange }
          data-testid={ dataTestId }
        />
      </label>
    );
  }
}

InputCheckbox.propTypes = {
  labelText: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputCheckbox;
