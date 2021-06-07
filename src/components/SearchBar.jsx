import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { filter } = this.props;
    console.log(filter.searchText);
    return (
      <form data-testid="search-bar-form">
        <label
          htmlFor="search-bar"
          data-testid="text-input-label"
        >
          Inclui o texo:
          <input
            type="text"
            id="search-bar"
            value={ filter.searchText }
            onChange={ filter.onSearchTextChange }
            data-testid="text-input"
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  filter: PropTypes.shape({
    searchText: PropTypes.string,
    onSearchTextChange: PropTypes.func,
    bookmarkedOnly: PropTypes.bool,
    onBookmarkedChange: PropTypes.func,
    selectedGenre: PropTypes.string,
    onSelectedGenreChange: PropTypes.func,
  }).isRequired,
};

export default SearchBar;
