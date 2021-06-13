import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { funcValue, stateValue } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          id="rating"
          name="rating"
          type="number"
          data-testid="rating-input"
          onChange={ funcValue }
          value={ stateValue }
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  funcValue: PropTypes.func.isRequired,
  stateValue: PropTypes.string.isRequired,
};

export default RatingInput;
