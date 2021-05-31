import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovieRating extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          id="rating-input"
          name="rating"
          data-testid="rating-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddMovieRating.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};
