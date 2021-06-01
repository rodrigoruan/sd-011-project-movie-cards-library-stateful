import React from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    // console.log(searchText)
    return (
      <form action="" data-testid="search-bar-form">
        <label htmlFor="search" data-testid="text-input-label">
          Inclui o texto
          <input
            id="search"
            data-testid="text-input"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <input type="checkbox" data-testid="checkbox-input" />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  // bookmarkedonly: PropTypes.bool,
  // onBookMarkedChange: PropTypes.func,
  // selectedGenre: PropTypes.string,
  // onSelectedGenreChange: PropTypes.func,
};
