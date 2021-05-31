import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    // , bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange
    return (
      <form data-testid="search-bar-form">
        <label
          data-testid="text-input-label"
          htmlFor='input1'>
            Inclui o texto:
        </label>
        <input
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
          id='input1' />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func
};

export default SearchBar;
