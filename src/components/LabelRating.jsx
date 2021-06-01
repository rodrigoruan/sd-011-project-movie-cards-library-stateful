import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LabelRating extends Component {
  render() {
    const { rating, handleState } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ rating }
          data-testid="rating-input"
          id="rating-input"
          onChange={ handleState }
          max="5"
          min="0"
        />
      </label>
    );
  }
}

LabelRating.propTypes = {
  rating: PropTypes.number.isRequired,
  handleState: PropTypes.func.isRequired,
};
