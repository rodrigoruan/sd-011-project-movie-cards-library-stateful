import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputRating extends Component {
  render() {
    const { handleChange, rating } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          id="rating"
          value={ rating }
          name="rating"
          type="number"
          data-testid="rating-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}
InputRating.propTypes = {
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default InputRating;
