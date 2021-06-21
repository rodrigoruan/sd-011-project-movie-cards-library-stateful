import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          data-testid="rating-input"
          name="rating"
          type="number"
          value={ rating }
          onChange={ handleChange }
        />
      </label>
    );
  }
}
RatingInput.propTypes = {
  rating: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default RatingInput;
