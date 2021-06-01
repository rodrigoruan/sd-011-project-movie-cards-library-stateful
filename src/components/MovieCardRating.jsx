import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MovieCardRating extends Component {
  render() {
    const { handleEvents, value } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ value }
          defaultValue={ 0 }
          data-testid="rating-input"
          onChange={ handleEvents }
        />
      </label>
    );
  }
}

MovieCardRating.propTypes = {
  handleEvents: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};
