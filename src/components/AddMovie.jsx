// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  render() {
    const { func, title, subtitle, imagePath, storyline, rating, genre, onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="i2" data-testid="title-input-label">
          Título
          <input data-testid="title-input" value={ title } onChange={ func } name="title" />
        </label>
        <label htmlFor="i2" data-testid="subtitle-input-label">
          Subtítulo
          <input data-testid="subtitle-input" value={ subtitle } onChange={ func } name="subtitle" />
        </label>
        <label htmlFor="i2" data-testid="image-input-label">
          Imagem
          <input data-testid="image-input" value={ imagePath } onChange={ func } name="imagePath" />
        </label>
        <label htmlFor="i2" data-testid="storyline-input-label">
          Sinopse
          <input
            type="textarea"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ func }
            name="storyline"
          />
        </label>
        <label htmlFor="i2" data-testid="rating-input-label">
          Avaliação
          <input
            data-testid="rating-input"
            type="number"
            value={ rating }
            name="rating"
            onChange={ func }
          />
        </label>
        <label htmlFor="i2" data-testid="genre-input-label">
          Gênero
          <select data-testid="genre-input" name="genre" value={ genre } onChange={ func }>
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button type="reset" data-testid="send-button" onClick={ onClick }>Adicionar filme</button>
      </form>
    );
  }
}
export default AddMovie;

AddMovie.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  imagePath: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
