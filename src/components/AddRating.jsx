import React from 'react';
import PropTypes from 'prop-types';

class AddRating extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          id="rating-input"
          name="rating"
          type="number"
          value={ rating }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddRating.propTypes = {
  rating: PropTypes.number,
  handleChange: PropTypes.func,
}.isRequired;

export default AddRating;
