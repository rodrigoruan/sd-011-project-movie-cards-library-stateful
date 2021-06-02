import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RatingForm extends Component {
  render() {
    const { rating, handleAddMovie } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="number">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          name="rating"
          value={ rating }
          onChange={ handleAddMovie }
        />
      </label>
    );
  }
}

RatingForm.propTypes = {
  rating: PropTypes.number.isRequired,
  handleAddMovie: PropTypes.func.isRequired,
}.isRequired;
