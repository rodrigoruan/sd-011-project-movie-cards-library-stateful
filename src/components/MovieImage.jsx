import React from 'react';
import PropTypes from 'prop-types';

class MovieImage extends React.Component {
  render() {
    const { value, name, onChange } = this.props;
    return (
      <label htmlFor="image-input-label" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          name={ name }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

MovieImage.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MovieImage;
