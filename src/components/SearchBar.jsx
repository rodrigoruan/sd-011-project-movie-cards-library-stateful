// implement AddMovie component here
import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange,bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label">
          <span>Inclui o texto:</span>
          <input
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label data-testid="checkbox-input-label">
          <span>Mostrar somente favoritos</span>
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
