// implement AddMovie component here

import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="text-input">
          Inclui o texto:
          <input id="text-input" type="text" value={ searchText } onChange={ onSearchTextChange } data-testid="text-input" name="searchText" />
        </label>
        <label htmlFor data-testid="checkbox-input">
          Mostrar somente favoritos
          <input type="checkbox" value={ bookmarkedOnly } onChange={ onBookmarkedChange } data-testid="checkbox-input" id="checkbox-input" name="bookmarkedOnly" />
        </label>
        <label htmlFor="select-input">
          Filtrar por gênero
          <select data-testid="select-input" id="select-input" value={ selectedGenre } onChange={ onSelectedGenreChange } name="selectedGenre">
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
