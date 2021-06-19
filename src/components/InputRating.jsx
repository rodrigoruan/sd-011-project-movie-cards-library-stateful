import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputRating extends Component {
  render() {
    const { value, handleChanges } = this.props;
    return (
      <label htmlFor="new-rating" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          id="new-rating"
          type="number"
          value={ value }
          data-testid="rating-input"
          onChange={ handleChanges }
        />
      </label>
    );
  }
}
export default InputRating;

InputRating.propTypes = {
  value: PropTypes.string.isRequired,
  handleChanges: PropTypes.func.isRequired,
};
