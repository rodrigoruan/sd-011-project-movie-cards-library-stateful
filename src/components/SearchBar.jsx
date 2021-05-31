import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
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
        <label
          htmlFor="searchText"
          data-testid="text-input-label"
        >
          Inclui o texto:
          <input
            type="text"
            id="searchText"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label
          htmlFor="bookmarked"
          data-testid="checkbox-input-label"
        >
          Mostrar somente favoritos
          <input
            type="checkbox"
            id="bookmarked"
            data-testid="checkbox-input"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
      </form>
    );
  }
}

SearchBar.defaultProps = {
  movie: {},
  searchText: '',
  onSearchTextChange: () => {},
  bookmarkedOnly: false,
};

SearchBar.propTypes = {
  movie: PropTypes.shape({
    searchText: PropTypes.string,
    onSearchTextChange: PropTypes.func,
    bookmarkedChange: PropTypes.bool,
    selectedGenre: PropTypes.string,
    onSelectedGenreChange: PropTypes.func,
  }),
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
};

export default SearchBar;
