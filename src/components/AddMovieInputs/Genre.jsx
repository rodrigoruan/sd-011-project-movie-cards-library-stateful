import React, { Component } from 'react';
import { bool, func } from 'prop-types';

class Genre extends Component {
  render() {
    const { genre, handleInputChange } = this.props;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          id="genre"
          type="checkbox"
          value={ genre }
          onChange={ handleInputChange }
          data-testid="genre-input"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

Genre.propTypes = {
  genre: bool,
  handleInputChange: func,
}.isRequired;

export default Genre;
