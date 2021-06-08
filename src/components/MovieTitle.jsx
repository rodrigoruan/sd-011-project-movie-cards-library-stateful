import React from 'react';
import PropTypes from 'prop-types';

class MovieTitle extends React.Component {
  render() {
    const { value, name, onChange } = this.props;
    return (
      <label htmlFor data-testid="title-input-label">
        Título
        <input
          type="text"
          data-testid="title-input"
          name={ name }
          defaultValue={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

MovieTitle.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MovieTitle;
