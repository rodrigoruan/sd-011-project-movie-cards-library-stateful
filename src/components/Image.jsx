import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="ImageID">
        Imagem
        <input
          value={ value }
          type="text"
          id="ImageID"
          name="imagePath"
          onChange={ onChange }
          data-testid="image-input"
        />
      </label>

    );
  }
}

Image.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Image;

// Source: auxílio do colega Anderson do Santos Silva, consulta ao repositório: https://github.com/tryber/sd-011-project-movie-cards-library-stateful/pull/173/
