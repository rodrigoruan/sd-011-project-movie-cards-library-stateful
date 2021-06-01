import React from 'react';
import PropTypes from 'prop-types';

class InputNum extends React.Component {
  render() {
    const { rating, handler } = this.props;
    return (
      <label htmlFor="i2" data-testid="rating-input-label">
        Avaliação
        <input
          id="rating-input"
          type="number"
          data-testid="rating-input"
          value={ rating }
          name="rating"
          onChange={ handler }
        />
      </label>
    );
  }
}
export default InputNum;

InputNum.propTypes = {
  rating: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};
