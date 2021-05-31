import React, { Component } from 'react';

export default class SearchBar extends Component {


  render() {
    const { 
      searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange, 
      selectedGenre, onSelectedGenreChange } = this.props;


    return (
      <form data-testid="search-bar-form">
          <label data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
            placeholder="Digite seu filme"
          />
        </label>
        <label data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            data-testid="checkbox-input"
            onChange={ onBookmarkedChange }
          />
        </label>
      </form>
    )
  }
}
