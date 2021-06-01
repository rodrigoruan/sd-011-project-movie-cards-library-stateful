import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="textInput" data-testid="text-input-label">
          <span>Inclui o texto:</span>
          <input
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
            className="textInput"
            name="textInput"
          />
        </label>
        <label htmlFor="checkboxInput" data-testid="checkbox-input-label">
          <span>Mostrar somente favoritos</span>
          <input
            type="checkbox"
            data-testid="checkbox-input"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            className="checkboxInput"
            name="checkboxInput"
          />
        </label>
        <label htmlFor="selectInput" data-testid="select-input-label">
          <span>Filtrar por gênero</span>
          <select
            data-testid="select-input"
            name="selectInput"
            className="selectInput"
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
  onSearchTextChange: 'undefined',
  bookmarkedOnly: false,
  onBookmarkedChange: 'undefined',
  selectedGenre: '',
  onSelectedGenreChange: 'undefined',
};

export default SearchBar;
