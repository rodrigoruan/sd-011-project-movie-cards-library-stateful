import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="inputText">
          Inclui o texto:
          <input
            data-testid="text-input"
            value={ searchText }
            type="text"
            onChange={ onSearchTextChange }
          />
        </label>
      </form>
    );
  }
}
