import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const
      { searchText,
        onSearchTextChange,
        bookmarkedOnly,
        onBookmarkedChange,
      } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="inpInclude">
          Inclui o texto:
          <input
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
            id="inpInclude"
          />
        </label>
        <label htmlFor="favCheck">
          Mostrar somente favoritos
          <input
            type="checkbox"
            id="favCheck"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default SearchBar;
