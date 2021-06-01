import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { rating, handleChange } = this.props;

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
          onChange={ handleChange }
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default RatingInput;
