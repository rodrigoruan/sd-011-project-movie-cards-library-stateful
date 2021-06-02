// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    // const {
    //   searchText,
    //   onSearchTextChange,
    //   bookmarkedOnly,
    //   onBookmarkedChange,
    //   selectedGenre,
    //   onSelectedGenreChange } = this.props;

    return (
      <div data-testid="search-bar-form">
        <label htmlFor="search">
          <p>Inclui o texto</p>
          <input type="search" />
        </label>
        <label htmlFor="checkbox">
          <p>Marcar somente favoritos</p>
          <input type="checkbox" />
        </label>
      </div>
    );
  }
}

SearchBar.propType = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

export default SearchBar;
