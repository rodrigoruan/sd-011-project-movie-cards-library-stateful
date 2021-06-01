import React from 'react';
import PropTypes from 'prop-types';

class InputNumber extends React.Component {
  render() {
    const { rating, hadleState } = this.props;

    return (
      <label
        data-testid="rating-input-label"
        htmlFor="rating-input"
      >
        Avaliação
        <input
          type="number"
          value={ rating }
          onChange={ hadleState }
          name="rating"
          data-testid="rating-input"
          id="rating-input"
        />
      </label>
    );
  }
}

export default InputNumber;

InputNumber.propTypes = {
  rating: PropTypes.number.isRequired,
  hadleState: PropTypes.func.isRequired,
};
