import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputMovieFirst extends Component {
  render() {
    const { title, subtitle, imagePath, storyline, handleNewMovie } = this.props;
    return (
      <div>
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            name="title"
            data-testid="title-input"
            value={ title }
            type="text"
            onChange={ handleNewMovie }
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            name="subtitle"
            data-testid="subtitle-input"
            value={ subtitle }
            type="text"
            onChange={ handleNewMovie }
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            name="imagePath"
            value={ imagePath }
            onChange={ handleNewMovie }
            data-testid="image-input"
          />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            onChange={ handleNewMovie }
            data-testid="storyline-input"
          />
        </label>
      </div>
    );
  }
}

InputMovieFirst.propTypes = {
  handleNewMovie: PropTypes.func.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
};
