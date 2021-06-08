import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LabeledInput extends Component {
  render() {
    const { id, labelTestId, labelText, ...properties } = this.props;
    return (
      <label htmlFor={ id } data-testid={ labelTestId }>
        { labelText }
        <input id={ id } { ...properties } />
      </label>
    );
  }
}

LabeledInput.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  labelTestId: PropTypes.string.isRequired,
};

export default LabeledInput;
