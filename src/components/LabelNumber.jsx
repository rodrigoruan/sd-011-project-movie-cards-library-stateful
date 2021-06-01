import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LabelNumber extends Component {
  render() {
    const { value, functionChange } = this.props;
    return (
      <label htmlFor="rating-input-label" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          value={ value }
          data-testid="rating-input"
          onChange={ functionChange }
        />
      </label>
    );
  }
}

LabelNumber.propTypes = {
  value: PropTypes.string.isRequired,
  functionChange: PropTypes.func.isRequired,
};

export default LabelNumber;
