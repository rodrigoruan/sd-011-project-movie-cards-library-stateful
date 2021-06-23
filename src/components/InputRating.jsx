import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="ratingID">
        Avaliação
        <input
          value={ value }
          type="number"
          id="ratingID"
          name="rating"
          onChange={ onChange }
          data-testid="rating-input"
        />
      </label>
    );
  }
}

export default InputRating;

InputRating.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
}.isRequired;

// Source: auxílio do colega Anderson do Santos Silva, consulta ao repositório: https://github.com/tryber/sd-011-project-movie-cards-library-stateful/pull/173/
