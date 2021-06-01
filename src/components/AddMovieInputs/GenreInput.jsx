import React from 'react';

class GenreInput extends React.Component {
  render() {
    const {
      genre,
      handleChange,
    } = this.props;

    return(
      <div>
        <label data-testid="genre-input-label" htmlFor="genreNewMovieId">
            <span>Gênero</span>

            <select
              id="genreNewMovieId"
              name="genre"
              value={ genre }
              onChange={ handleChange }
              data-testid="genre-input"
            >
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>

          </label>
      </div>
    );
  }
}

export default GenreInput;