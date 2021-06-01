import React from 'react';
import PropTypes from 'prop-types';
import Select from './Select';

class SearchBar extends React.Component {
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
        <label data-testid="text-input-label" htmlFor="text-input">
          Inclui o texto:
          <input
            id="text-input"
            data-testid="text-input"
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
          Mostrar somente favoritos
          <input
            id="checkbox-input"
            type="checkbox"
            data-testid="checkbox-input"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
        <Select value={ selectedGenre } onChange={ onSelectedGenreChange } />
      </form>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  search: PropTypes.shape = {
    searchText: Proptypes.string,
    onSearchTextChange: Proptypes.function,
    bookmarkedOnly: Proptypes.function,
    onBookmarkedChange: Proptypes.function,
    selectedGenre: Proptypes.string,
    onSelectedGenreChange: Proptypes.function,
  },
};
SearchBar.defaultProps = {
  search: PropTypes.shape = {
    searchText: Proptypes.string,
    onSearchTextChange: () => {},
    bookmarkedOnly: Proptypes.function,
    onBookmarkedChange: () => {},
    selectedGenre: Proptypes.string,
    onSelectedGenreChange: () => {},
  },
};
