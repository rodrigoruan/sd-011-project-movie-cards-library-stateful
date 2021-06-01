import React from 'react';
import PropTypes from 'prop-types';

export default class RatingInput extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          value={ rating }
          name="rating"
          data-testid="rating-input"
          id="rating-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
};
