// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import TextArea from './TextArea';

class AddMovie extends Component {
  render() {
    const { func, title, subtitle, imagePath, storyline, rating, genre, onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <Input handler={ func } text="Título" dataLabel="title-input-label" dataInput="title-input" value={ title } name="title" />
        <Input handler={ func } text="Subtítulo" dataLabel="subtitle-input-label" dataInput="title-input" value={ subtitle } name="subtitle" />
        <Input handler={ func } text="Imagem" dataLabel="image-input-label" dataInput="image-input" value={ imagePath } name="imagePath" />
        <TextArea value={ storyline } onChange={ func } />
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
