import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { funcValue, stateValue } = this.props;
    return (
      <label htmlFor="input" data-testid="rating-input-label">
        Avaliação
        <input
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
