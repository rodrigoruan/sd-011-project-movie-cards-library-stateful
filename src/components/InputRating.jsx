import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputRating extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          value={ parseFloat(value) }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputRating;
