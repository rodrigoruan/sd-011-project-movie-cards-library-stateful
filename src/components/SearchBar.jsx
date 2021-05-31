import React, { Component } from 'react';

export class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="Texto">
          <input
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
            name="Texto"
            type="text"
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="Check">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            onChange={ onBookmarkedChange }
            checked={ bookmarkedOnly }
            name="Check"
            type="checkbox"
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;
