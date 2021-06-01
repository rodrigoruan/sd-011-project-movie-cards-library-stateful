import React from 'react';
import PropTypes from 'prop-types';

class InputNum extends React.Component {
  render() {
    const { value, handler } = this.props;
    return (
      <label htmlFor="i2" data-testid="rating-input-label">
        Avaliação
        <input
          id="rating-input"
          type="number"
          data-testid="rating-input"
          value={ value }
          name="rating"
          onChange={ handler }
        />
      </label>
    );
  }
}
export default InputNum;

InputNum.propTypes = {
  value: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};
