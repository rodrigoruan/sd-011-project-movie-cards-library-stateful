import React from 'react';
import PropTypes from 'prop-types';

class MovieSubtitle extends React.Component {
  render() {
    const { value, name, onChange } = this.props;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          value={ value }
          name={ name }
          onChange={ onChange }
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

MovieSubtitle.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MovieSubtitle;
