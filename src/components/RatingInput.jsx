import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RatingInput extends Component {
  render() {
    const { rating, handleChanges } = this.props;
    return (
      <div>
        <label data-testid="rating-input-label" htmlFor="rating-input-label">
          Avaliação:
          <input
            name="rating"
            data-testid="rating-input"
            type="number"
            value={ rating }
            onChange={ handleChanges }
          />
        </label>
      </div>
    );
  }
}

RatingInput.propTypes = {
  rating: PropTypes.number.isRequired,
  handleChanges: PropTypes.func.isRequired,
};
