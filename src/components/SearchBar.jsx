import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        
      </div>
    )
  }
}

SearchBar.proTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  searchText: '',
  bookmarkedOnly: '',
  selectedGenre: '',
};

export default SearchBar;
