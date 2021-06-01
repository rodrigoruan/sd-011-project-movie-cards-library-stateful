import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovieRating extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="input-rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          id="input-rating"
          data-testid="rating-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddMovieRating.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
