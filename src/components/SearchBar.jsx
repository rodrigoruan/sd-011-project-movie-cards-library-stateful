import React from 'react';
import PropTypes from 'prop-types';

export default function SearchBar(props) {
  const {
    searchText,
    onSearchTextChange,
    bookmarkedOnly,
    onBookmarkedChange,
    selectedGenre,
    onSelectedGenreChange,
  } = props;

  return (
    <form className="form-container" data-testid="search-bar-form">
      <label data-testid="text-input-label" htmlFor="searchText">
        Inclui o texto:
        <input
          id="searchText"
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
        />
      </label>
      <label data-testid="checkbox-input-label" htmlFor="bookmarkedOnly">
        Mostrar somente favoritos
        <input
          id="bookmarkedOnly"
          type="checkbox"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
        />
      </label>
      <label data-testid="select-input-label" htmlFor="selectInput">
        Filtrar por gênero
        <select
          id="selectInput"
          data-testid="select-input"
          onChange={ onSelectedGenreChange }
          value={ selectedGenre }
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    </form>
  );
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
  onSearchTextChange: () => {},
  bookmarkedOnly: false,
  onBookmarkedChange: () => {},
  selectedGenre: '',
  onSelectedGenreChange: () => {},
};
