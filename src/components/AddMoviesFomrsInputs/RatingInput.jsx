import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { rating, chosenMovie } = this.props;

    return (
      <label
        className="add-movie-labels"
        htmlFor="rating-input"
        data-testid="rating-input-label"
      >
        Avaliação
        <input
          id="rating-input"
          name="rating"
          type="Number"
          value={ rating }
          data-testid="rating-input"
          onChange={ chosenMovie }
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  rating: PropTypes.number.isRequired,
  chosenMovie: PropTypes.func.isRequired,
};

export default RatingInput;
