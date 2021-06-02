import React from 'react';
import PropTypes from 'prop-types';

class InputNum extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          value={ value }
          name="rating"
          onChange={ onChange }
        />
      </label>
    );
  }
}
export default InputNum;

InputNum.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
