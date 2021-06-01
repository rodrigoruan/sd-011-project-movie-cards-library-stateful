import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieRating extends Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação:
        <input
          data-testid="rating-input"
          name="rating"
          type="number"
          value={ rating }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddMovieRating.propTypes = {
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddMovieRating;
