import React, { Component } from 'react';

class SearchBar extends Component {
/*
 searchText, uma string
bookmarkedOnly, um boolean
onBookmarkedChange, uma callback
selectedGenre, uma string
onSelectedGenreChange, uma callback
 */
  // onSearchTextChange, uma callback: acho q no material tem um exempl q se encaixa aqui..
  onSearchTextChange() {
    return 1 + 1;
  }

  render() {
    return (
      <form data-testid="search-bar-form">
        Inclui o texto
        <label data-testid="text-input-label" htmlFor="text-input">
          <input
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        Mostrar somente favoritos
        <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;
