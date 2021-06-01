import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovieRating extends Component {
  render() {
    const { event, valueR } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação:
        <input
          data-testid="rating-input"
          value={ valueR }
          type="number"
          name="rating"
          id="rating"
          onChange={ event }
        />
      </label>
    );
  }
}

AddMovieRating.propTypes = {
  valueR: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
};
