// implement AddMovie component here
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
        <label data-testid="text-input-label" htmlFor="text-input">
          Inclui o texto
          <input
            type="text"
            name="searchText"
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
        <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
          Mostrar somente favoritos
          <input
            name="bookmarkedOnly"
            data-testid="checkbox-input"
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>
        <label data-testid="select-input-label" htmlFor="select-input">
          Filtrar por gênero
          <select
            name="selectedGenre"
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

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: PropTypes.function,
  bookmarkedOnly: false,
  onBookmarkedChange: PropTypes.function,
  selectedGenre: '',
  onSelectedGenreChange: PropTypes.function,
};

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.string,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.string,
};

export default SearchBar;
