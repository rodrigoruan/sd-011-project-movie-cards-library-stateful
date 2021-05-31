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
      </form>
    );
  }
}

export default SearchBar;
