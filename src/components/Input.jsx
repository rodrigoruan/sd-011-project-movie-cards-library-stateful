import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { onChange, text, dataLabel, dataInput, value, name } = this.props;
    return (
      <label data-testid={ dataLabel } htmlFor={ name }>
        {text}
        <input
          data-testid={ dataInput }
          value={ value }
          name={ name }
          onChange={ onChange }
        />
      </label>
    );
  }
}
export default Input;

Input.propTypes = {
  text: PropTypes.string.isRequired,
  dataLabel: PropTypes.string.isRequired,
  dataInput: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
