import React from 'react';
import PropTypes from 'prop-types';

class MovieRating extends React.Component {
  render() {
    const { value, name, onChange } = this.props;
    return (
      <label htmlFor data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          defaultValue={ value }
          name={ name }
          onChange={ onChange }
        />
      </label>
    );
  }
}

MovieRating.propTypes = {
  value: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MovieRating;
