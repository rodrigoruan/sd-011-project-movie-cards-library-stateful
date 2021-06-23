import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Req.12
class Rating extends Component {
  render() {
    const { rating, newRating } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          value={ rating }
          onChange={ newRating }
        />
      </label>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.string,
  newRating: PropTypes.func,
}.isRequired;

export default Rating;
