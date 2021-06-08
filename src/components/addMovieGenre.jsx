import React, { Component } from 'react';

class addMovieGenre extends Component {
  render() {
    const { genre, handleMovie } = this.props;
    return (
      <label htmlFor="genreId" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genreId"
          type="text"
          name="genre"
          value={ genre }
          onChange={ handleMovie }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

export default addMovieGenre;