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
        <label htmlFor="control" data-testid="text-input-label">
          Inclui o texto:
          <input
            id="control"
            type="text"
            name="searchBar"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label htmlFor="control" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            id="control"
            data-testid="checkbox-input"
            type="text"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
        <label htmlFor="control" data-testid="select-input-label">
          Filtrar por gênero
          <select
            id="control"
            data-testid="select-input"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: () => { },
  bookmarkedOnly: PropTypes.false,
  onBookmarkedChange: () => { },
  selectedGenre: '',
  onSelectedGenreChange: () => { },

};
