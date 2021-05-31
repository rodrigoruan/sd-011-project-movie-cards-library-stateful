import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewInputs extends Component {
  render() {
    const { key, inputType, labelText, handlChng } = this.props;
    return (
      <label data-testid={ `${key}-input-label` } htmlFor={ `${key}-input` }>
        {labelText}
        <input
          type={ inputType }
          data-testid={ `${key}-input` }
          value={ key }
          onChange={ handlChng }
        />
      </label>
    );
  }
}
export default NewInputs;

NewInputs.propTypes = {
  key: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  handlChng: PropTypes.func.isRequired,
};
