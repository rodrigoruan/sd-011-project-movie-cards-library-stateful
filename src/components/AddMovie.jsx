// implement AddMovie component here
import React, { Component } from 'react';

class AddMovie extends Component {
  renderTitleInput() {
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input id="title-input" data-testid="title-input" />
      </label>
    );
  }

  renderSubtitleInput() {
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input id="subtitle-input" data-testid="subtitle-input" />
      </label>
    );
  }

  renderImageInput() {
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input id="image-input" data-testid="image-input" />
      </label>
    );
  }

  renderStorylineInput() {
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <input id="storyline-input" data-testid="storyline-input" />
      </label>
    );
  }

  renderRatinglineInput() {
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          id="rating-input"
          data-testid="rating-input"
          defaultValue={ 0 }
        />
      </label>
    );
  }

  renderGenreInput() {
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select type="number" id="genre-input" data-testid="genre-input">
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <div>
        <p>Add Movie</p>
        <form data-testid="add-movie-form">
          { this.renderTitleInput() }
          { this.renderSubtitleInput() }
          { this.renderImageInput() }
          { this.renderStorylineInput() }
          { this.renderRatinglineInput() }
          { this.renderGenreInput() }
        </form>
      </div>
    );
  }
}

export default AddMovie;
