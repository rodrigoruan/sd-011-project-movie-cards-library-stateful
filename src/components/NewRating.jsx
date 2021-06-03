import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="nota" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          value={ value }
          id="nota"
          type="number"
          onChange={ handleChange }
          data-testid="rating-input"
        />
      </label>
    );
  }
}

Rating.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default Rating;
