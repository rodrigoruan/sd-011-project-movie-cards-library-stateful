import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { stateModify, rating } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          name="rating"
          value={ rating }
          onChange={ stateModify }
        />
      </label>
    );
  }
}

export default InputRating;

InputRating.propTypes = {
  stateModify: PropTypes.func.isRequired,
  rating: PropTypes.string.isRequired,
};
