import React from 'react';
import PropTypes from 'prop-types';

class AddRating extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label
        htmlFor="rating"
        data-testid="rating-input-label"
      >
        Avaliação
        <input
          type="number"
          name="rating"
          value={ rating }
          data-testid="rating-input"
          onChange={ handleChange }
          max="10"
          min="0"
        />
      </label>
    );
  }
}

AddRating.propTypes = {
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddRating;
