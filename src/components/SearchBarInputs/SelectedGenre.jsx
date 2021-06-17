import React, { Component } from 'react';
import { string, func } from 'prop-types';

class SelectedGenre extends Component {
  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="input-select" data-testid="select-input-label">
        Filtrar por gênero
        <select
          name="selectedGenre"
          id="input-select"
          type="checkbox"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          data-testid="select-input"
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>

      </label>
    );
  }
}

SelectedGenre.propTypes = {
  selectedGenre: string,
  onSelectedGenreChange: func,
}.isRequired;

export default SelectedGenre;
