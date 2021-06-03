import React from 'react';
import PropTypes from 'prop-types';

export default class InputRating extends React.Component {
  render() {
    const {
      value,
      onChange,
    } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          id="rating"
          name="rating"
          value={ value }
          onChange={ (event) => onChange(event) }
          data-testid="rating-input"
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
