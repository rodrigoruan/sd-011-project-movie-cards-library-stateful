import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating, handleChangeRating } = this.props;
    return (
      <div className="movie-card-rating" data-testid="rating">
        <span className="rating">{rating}</span>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input
            data-testid="rating-input"
            name="rating"
            type="number"
            value={ rating }
            onChange={ handleChangeRating }
          />
        </label>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
  handleChangeRating: PropTypes.func,
}.isRequired;

export default Rating;
