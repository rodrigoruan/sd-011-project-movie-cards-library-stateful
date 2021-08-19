// implement AddMovie component here
// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import '../css/Movie.css';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        {searchText}
        {onSearchTextChange}
        {bookmarkedOnly}
        {onBookmarkedChange}
        {selectedGenre}
        {onSelectedGenreChange}
        <form data-testid="search-bar-form" className="search-bar">
          <h5>Pequisar Filmes</h5>
          <label htmlFor="ex3" data-testid="text-input-label">
            Inclui o texto
            <input
              id="ex3"
              type="text"
              value={ searchText }
              onChange={ onSearchTextChange }
              data-testid="text-input"
              className="search-bar-input"
            />
          </label>
          <label htmlFor="ex4" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              id="ex4"
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              data-testid="checkbox-input"
              className="search-bar-checkfavorites"
            />
          </label>
          <label htmlFor="ex5" data-testid="select-input-label">
            Filtrar por gênero
            <select
              id="ex5"
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
              data-testid="select-input"
              className="search-bar-selectgenre"
            >
              <option data-testid="select-option" value="">Todos</option>
              <option data-testid="select-option" value="action">Ação</option>
              <option data-testid="select-option" value="comedy">Comédia</option>
              <option data-testid="select-option" value="thriller">Suspense</option>
            </select>
          </label>
        </form>
      </div>
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
}.isRequired;

export default SearchBar;
