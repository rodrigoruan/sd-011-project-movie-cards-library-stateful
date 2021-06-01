import React from 'react';

class Genre extends React.Component {
  render() {
    const { genre, AddMyMovies } = this.props
    return (
      <label data-testid="genre-input-label">
        Gênero
        <select
        name="genre"
        data-testid="genre-input"
        value={ genre }
        onChange={ AddMyMovies }>
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
      </label>
    )
  }
}

Genre.propTypes = {
  genre: PropTypes.string,
  addMyMovies: PropTypes.func,
}

export default Genre;