import React from 'react';
import PropTypes from 'prop-types';

export default class AddMovieRating extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label htmlFor="add-movie-rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          id="add-movie-rating-input"
          name="rating"
          type="number"
          min="0"
          max="5"
          step="0.1"
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
