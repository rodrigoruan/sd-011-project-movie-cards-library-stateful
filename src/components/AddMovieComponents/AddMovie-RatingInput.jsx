// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { inVal, funcOnChange } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          value={ inVal }
          name="rating"
          onChange={ funcOnChange }
          data-testid="rating-input"
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  inVal: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  funcOnChange: PropTypes.func.isRequired,
};

export default RatingInput;
