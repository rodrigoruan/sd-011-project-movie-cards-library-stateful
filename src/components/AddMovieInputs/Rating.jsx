import React, { Component } from 'react';
import { number, func } from 'prop-types';

class Rating extends Component {
  render() {
    const { rating, handleInputChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          id="rating"
          data-testid="rating-input"
          value={ rating }
          onChange={ handleInputChange }
        />
      </label>
    );
  }
}

Rating.propTypes = {
  rating: number,
  handleInputChange: func,
}.isRequired;

export default Rating;
