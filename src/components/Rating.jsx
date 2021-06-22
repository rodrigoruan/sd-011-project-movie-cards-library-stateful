import React from 'react';
import PropTypes from 'prop-types';

export default class Rating extends React.Component {
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
          value={ rating }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};
