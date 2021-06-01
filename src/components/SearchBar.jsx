import React from 'react';

Class SearchBar extends React.Component {
  render () {
    const { SearchBar } = this.props;
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = SearchBar;
  }
}
export default SearchBar;