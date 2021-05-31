import React, { Component } from 'react';

export default class AddMovie extends Component {
  render() {
    return (
      <form data-test-id="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            data-testid="title-input"
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input type="text" data-testid="subtitle-input" />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input type="text" data-testid="image-input" />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea data-testid="storyline-input" />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          <input
            type="number"
            data-testid="rating-input"
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="genre-input"
          >
            <option data-testid="genre-option" value="">Todos</option>
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="">Todos</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button type="submit" data-testid="send-button">Adicionar filme</button>
      </form>

    );
  }
}
