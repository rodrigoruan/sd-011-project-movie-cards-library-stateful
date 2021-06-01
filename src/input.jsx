import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { handler, text, dataLabel, dataInput, value, name } = this.props;
    return (
      <label data-testid={ dataLabel } htmlFor="input">
        {text}
        <input
          data-testid={ dataInput }
          value={ value }
          name={ name }
          onChange={ handler }
        />
      </label>
    );
  }
}

export default Input;

Input.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dataLabel: PropTypes.string.isRequired,
  dataInput: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};
