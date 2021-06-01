import React from 'react';
import PropTypes from 'prop-types';

class RatingChange extends React.Component {
  render() {
    const { rating, handleChange } = this.props;

    return (
      <label data-testid="rating-input-label" htmlFor="addMovieRating">
        Avaliação
        <input
          type="number"
          value={ rating }
          data-testid="rating-input"
          onChange={ handleChange }
          id="addMovieRating"
          name="rating"
        />
      </label>
    );
  }
}

RatingChange.propTypes = {
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RatingChange;
