import React from 'react';
import PropTypes from 'prop-types';

class MovieTitles extends React.Component {
  render() {
    const {
      subtitle,
      title,
      imagePath,
      evChange,
    } = this.props;

    return (
      <fieldset>
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            id="title-input"
            value={ title }
            data-testid="title-input"
            onChange={ evChange }
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            id="subtitle-input"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ evChange }
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            id="image-input"
            value={ imagePath }
            data-testid="image-input"
            onChange={ evChange }
          />
        </label>
      </fieldset>
    );
  }
}

MovieTitles.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
  imagePath: PropTypes.string,
  evChange: PropTypes.func,
}.isRequired;

export default MovieTitles;
