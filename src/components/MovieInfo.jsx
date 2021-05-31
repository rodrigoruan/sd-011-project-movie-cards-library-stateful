import React from 'react';
import PropTypes from 'prop-types';

class MovieInfo extends React.Component {
  render() {
    const {
      subtitle,
      title,
      imagePath,
      handleChange,
    } = this.props;

    return (
      <fieldset>
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            id="title-input"
            type="text"
            name="title"
            value={ title }
            data-testid="title-input"
            onChange={ handleChange }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            id="subtitle-input"
            name="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ handleChange }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input
            type="text"
            name="imagePath"
            id="image-input"
            value={ imagePath }
            data-testid="image-input"
            onChange={ handleChange }
          />
        </label>
      </fieldset>
    );
  }
}

MovieInfo.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default MovieInfo;
