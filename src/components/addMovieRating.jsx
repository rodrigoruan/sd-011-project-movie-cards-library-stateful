import React, { Component } from 'react';
import PropTypes from 'prop-types';

class addMovieRating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          data-testid="rating-input"
          value={ rating }
          onChange={ this.handleMovie }
        />
      </label>
    );
  }
}

export default addMovieRating;

addMovieRating.propTypes = {
  rating: PropTypes.number.isRequired,
};
