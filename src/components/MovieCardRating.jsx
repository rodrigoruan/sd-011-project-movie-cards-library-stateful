import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MovieCardRating extends Component {
  render() {
    const { handleEvents } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          data-testid="rating-input"
          defaultValue={ 0 }
          onChange={ handleEvents }
        />
      </label>
    );
  }
}

MovieCardRating.propTypes = {
  handleEvents: PropTypes.func.isRequired,
};
