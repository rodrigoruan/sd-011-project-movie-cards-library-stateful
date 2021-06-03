import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddRatingNewFilm extends Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label
        htmlFor="rating-input"
        data-testid="rating-input-label"
      >
        Avaliação
        <input
          name="rating"
          type="number"
          min="0"
          max="10"
          step={ 0.1 }
          value={ rating }
          onChange={ handleChange }
          data-testid="rating-input"
        />
      </label>
    );
  }
}

AddRatingNewFilm.propTypes = {
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddRatingNewFilm;
