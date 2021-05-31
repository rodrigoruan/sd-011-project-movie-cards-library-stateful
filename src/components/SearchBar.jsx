// implement AddMovie component here
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" name="Inclui o texto:">
          Inclui o texto:
          <input value={ searchText } onChange={ onSearchTextChange } />
        </label>
      </form>
    );
  }
}

export default SearchBar;
