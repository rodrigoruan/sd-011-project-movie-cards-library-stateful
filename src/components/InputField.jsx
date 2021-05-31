import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputField extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="text-input" data-testid="text-input-label">
        Inclui o texto:
        <input
          id="text-input"
          data-testid="text-input"
          type="text"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputField.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
