// implement AddMovie component here
import React, { Component } from 'react';
//import PropTypes from 'prop-type';
import MovieLibrary from './components/MovieLibrary';

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
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>

        <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            type="checkbox"
            onChange={ onBookmarkedChange }
          />
        </label>

        <label data-testid="select-input-label" htmlFor="select-input">
          Filtrar por gênero
          <select
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

// SearchBar.propTypes = {
//   serachText: PropTypes.string,
//   onSearchTextChange: PropTypes.string,
//   bookmarkedOnly: PropTypes.bool,
//   onBookmarkedChange: PropTypes.string,
//   selectedGenre: PropTypes.string,
//   onSelectedGenreChange: PropTypes.string,
// }.isRequired;

export default SearchBar;
