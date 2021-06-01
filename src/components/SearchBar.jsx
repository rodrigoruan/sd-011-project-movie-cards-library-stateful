// implement AddMovie component here
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="name-input" data-testid="text-input-label">
            Inclui o texto
            <input
              value="searchText"
              // onChange={ onSearchTextChange }
              data-testid="text-input"
            />
          </label>
          <label htmlFor="name-input" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              type="checkbox"
              value="bookmarkedOnly"
              // onChange={ onBookmarkedChange }
              data-testid="checkbox-input"
            />
          </label>
          <label htmlFor="name-input" data-testid="select-input-label">
            Filtrar po gênero
            <select value="selectedGenre" data-testid="select-input">
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
