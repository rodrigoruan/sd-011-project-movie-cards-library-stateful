import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RatingInput extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  value: PropTypes.number,
  handleChange: PropTypes.func,
};

RatingInput.defaultProps = {
  value: 0,
  handleChange: () => {},
};

export default RatingInput;
