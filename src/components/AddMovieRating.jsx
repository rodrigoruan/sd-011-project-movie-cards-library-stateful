import React, { Component } from 'react';
import propTypes from 'prop-types';

class AddMovieRating extends Component {
  render() {
    const { rating, changer } = this.props;
    return (
      <label htmlFor="rating-input-label" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          name="rating"
          onChange={ changer }
          value={ rating }
        />
      </label>
    );
  }
}

AddMovieRating.propTypes = {
  rating: propTypes.text,
  changer: propTypes.func,
}.isRequired;

AddMovieRating.defaultProps = {
  rating: '',
};

export default AddMovieRating;
