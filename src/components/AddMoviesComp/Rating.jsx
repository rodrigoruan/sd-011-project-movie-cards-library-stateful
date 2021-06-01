import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <div>
        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação
          <input
            data-testid="rating-input"
            type="number"
            name="rating"
            value={ rating }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

export default Rating;

Rating.propTypes = {
  rating: PropTypes.number,
  handleChange: PropTypes.func,
}.isRequired;
