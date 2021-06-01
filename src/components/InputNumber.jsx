import React from 'react';
import PropTypes from 'prop-types';

class InputNumber extends React.Component {
  render() {
    const { rating, hadleState } = this.props;

    return (
      <label
        data-testid="rating-input-label"
        htmlFor="inputAddMovie"
      >
        Avaliação
        <input
          type="number"
          value={ rating }
          onChange={ hadleState }
          name="rating"
          data-testid="rating-input"
          id="inputAddMovie"
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
