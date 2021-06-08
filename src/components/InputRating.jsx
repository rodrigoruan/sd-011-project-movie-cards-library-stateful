import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputRating extends Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          id="rating"
          value={ rating }
          name="rating"
          type="number"
          data-testid="rating-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}
InputRating.propTypes = {
  rating: PropTypes.number,
  handleChange: PropTypes.func,
};
InputRating.defaultProps = {
  rating: 0,
  handleChange: () => {},
};
export default InputRating;
