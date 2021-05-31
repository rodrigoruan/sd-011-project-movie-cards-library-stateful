import React, { Component } from "react";
import PropTypes from 'prop-types';


class SearchBar extends Component {
  render() {
    const {
      search: {
        searchText,
        onSearchTextChange,
        bookmarkedOnly,
        onBookmarkedChange,
        selectedGenre,
        onSelectedGenreChange,
      },
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label">
          <input
            data-testid="text-input"
            value={searchText}
            onChange={onSearchTextChange}
          ></input>
        </label>
      </form>
    );
  }
}
export default SearchBar;

SearchBar.propTypes = {
  search: PropTypes.shape({
    searchText: PropTypes.string,
    onSearchTextChange: PropTypes.func,
    bookmarkedOnly: PropTypes.bool,
    onBookmarkedChange: PropTypes.func,
    selectedGenre: PropTypes.string,
    onSelectedGenreChange: PropTypes.func,
  }),
};
