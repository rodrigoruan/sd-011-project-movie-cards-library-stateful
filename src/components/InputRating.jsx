import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="ratingID">
        Avaliação
        <input
          value={ value }
          type="number"
          id="ratingID"
          name="rating"
          onChange={ onChange }
          data-testid="rating-input"
        />
      </label>
    );
  }
}

export default InputRating;

InputRating.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
