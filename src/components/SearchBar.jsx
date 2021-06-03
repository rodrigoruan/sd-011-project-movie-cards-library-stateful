import React, { Component } from 'react';

export default class SearchBar extends Component {
  // prettier-ignore
  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
    } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="searchText" data-testid="text-input-label">
            Inclui o texto
            <input
              type="text"
              name="searchText"
              value={searchText}
              onChange={onSearchTextChange}
              data-testid="text-input"
            />
          </label>

          <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              type="checkbox"
              checked={bookmarkedOnly}
              name="bookmarkedOnly"
              onChange={onBookmarkedChange}
              data-testid="checkbox-input"
            />
          </label>

          <label htmlFor="selectedGenre" data-testid="select-input-label">
            Filtrar por gênero
            <select name="selectedGenre" onChange={onSelectedGenreChange} value={selectedGenre} data-testid="select-input">
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
