import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieRating extends Component {
  render() {
    const { handleInputs, value } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="input">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          value={ value }
          name="rating"
          onChange={ handleInputs }
        />
      </label>
    );
  }
}

AddMovieRating.propTypes = {
  handleInputs: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default AddMovieRating;
