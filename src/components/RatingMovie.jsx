import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RatingMovie extends Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          id="rating"
          data-testid="rating-input"
          name="rating"
          value={ rating }
          type="number"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

RatingMovie.propTypes = {
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};
