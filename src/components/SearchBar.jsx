import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label">{ 'Inclui o texto:' }</label>
          <input onChange={ onSearchTextChange } data-testid="text-input" type="text" value={ searchText } />
        </form>
      </div>
    );
  }
}

export default SearchBar;
