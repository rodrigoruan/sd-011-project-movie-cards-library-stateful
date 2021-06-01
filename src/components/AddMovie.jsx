// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import ButtonAddMovie from '../addmoviecomponents/ButtonAddMovie';
import RatingAddMovie from '../addmoviecomponents/RatingAddMovie';

const state0 = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};
class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = state0;
  }

  render() {
    const { onClick } = this.props;
    return (
      <form method={ onClick } data-testid="add-movie-form">
        <label htmlFor="TitleInput" data-testid="title-input-label">
          Título
          <input
            id="TitleInput"
            type="text"
            data-testid="title-input"
          />
        </label>
        <label htmlFor="SubtitleInput" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="SubtitleInput"
            type="text"
            data-testid="subtitle-input"
          />
        </label>
        <label htmlFor="ImagePathInput" data-testid="image-input-label">
          Imagem
          <input
            id="ImagePathInput"
            type="text"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="StorylineInput" data-testid="storyline-input-label">
          Sinopse
          <textarea id="StorylineInput" data-testid="storyline-input" />
        </label>
        <RatingAddMovie />
        <label htmlFor="GenreInput" data-testid="genre-input-label">
          Gênero
          <select id="GenreInput" data-testid="genre-input">
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <ButtonAddMovie />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
