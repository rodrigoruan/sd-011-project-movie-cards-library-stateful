// implement AddMovie component here
import React, { Component } from 'react'

export default class SearchBar extends Component {
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
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="searchText" data-testid="text-input-label">
            Inclui o texto:
          </label> 
          <input 
            name="searchText"
            data-testid="text-input"
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
          />
          <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
            Mostrar somente favoritos
          </label>
          <input 
          name="bookmarkedOnly"
          type="checkbox"
          data-testid="checkbox-input"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
          />
          <label htmlFor="selectedGenre" data-testid="select-input-label">
            Filtrar por gênero
          </label>
          <select 
            name="selectedGenre"
            value={selectedGenre}
            onChange={onSelectedGenreChange}
            data-testid="select-input"
          >
            <option 
            data-testid="select-option" 
            value="">
              Todos
            </option>
            <option 
              data-testid="select-option" 
              value="action">
                Ação
            </option>
            <option 
              data-testid="select-option" 
              value="comedy">
              Comédia
            </option>
            <option 
              data-testid="select-option" 
              value="thriller">
              Suspense
            </option>
          </select>
        </form>
      </div>
    )
  }
}
