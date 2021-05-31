import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form" />
    );
  }
}

SearchBar.defaultProps = {
  movie: {},
};

SearchBar.propTypes = {
  movie: PropTypes.shape({
    searchText: PropTypes.string,
    onSearchTextChange: PropTypes.func,
    bookmarkedChange: PropTypes.bool,
    selectedGenre: PropTypes.string,
    onSelectedGenreChange: PropTypes.func,
  }),
};

export default SearchBar;
