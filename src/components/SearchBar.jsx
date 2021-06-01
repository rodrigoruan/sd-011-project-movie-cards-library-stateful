// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'porp-type';

class SearchBar extends Component {
  render() {
    const searchBarMovie = {
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
          <label data-testid="text-input-label">Inclui o texto:</label>
          <input data-testid="text-input" value={ this.searchText } onChange={ this.onSearchTextChange }></input>
        </form>
      </div>
    );
  }
}

SearchBar.PropTypes = {
  serachText: PropTypes.string,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
