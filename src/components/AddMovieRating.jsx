import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieRating extends Component {
  render() {
    const { value, handleInputs } = this.props;

    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ value }
          onChange={ handleInputs }
          data-testid="rating-input"
        />
      </label>
    );
  }
}

AddMovieRating.propTypes = {
  value: PropTypes.number,
  handleInputs: PropTypes.func,
};

AddMovieRating.defaultProps = {
  value: '',
  handleInputs: () => {},
};

export default AddMovieRating;
