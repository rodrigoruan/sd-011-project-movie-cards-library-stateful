import React from 'react';
import PropTypes from 'prop-types';

class RatingChange extends React.Component {
  render() {
    const { ratingChange, handleChange } = this.props;

    return (
      <label data-testid="rating-input-label" htmlFor="addMovieRating">
        Avaliação
        <input
          type="number"
          value={ ratingChange }
          data-testid="rating-input"
          onChange={ handleChange }
          id="addMovieRating"
          name="ratingChange"
        />
      </label>
    );
  }
}

RatingChange.propTypes = {
  ratingChange: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RatingChange;
