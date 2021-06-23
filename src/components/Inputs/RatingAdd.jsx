import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RatingAdd extends Component {
  render() {
    const { rating, handleFunction } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          id="rating-input"
          name="rating"
          type="number"
          value={ rating }
          onChange={ handleFunction }
        />
      </label>
    );
  }
}

RatingAdd.propTypes = {
  rating: PropTypes.number,
  handleFunction: PropTypes.func,
}.isRequired;

export default RatingAdd;
