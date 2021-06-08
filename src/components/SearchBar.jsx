import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
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
      <div
        searchText={ searchText }
        onSearchTextChange={ onSearchTextChange }
        bookmarkedOnly={ bookmarkedOnly }
        onBookmarkedChange={ onBookmarkedChange }
        selectedGenre={ selectedGenre }
        onSelectedGenreChange={ onSelectedGenreChange }
      >
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="">Inclui o texto:</label>
          <input data-testid="text-input" type="text" value={ searchText } onChange={ onSearchTextChange }/>
          <label data-testid="checkbox-input-label" htmlFor="">Mostrar somente favoritos</label>
          <input data-testid="checkbox-input" type="text" data-testid="checkbox-input" checked={ bookmarkedOnly } onChange={ onBookmarkedChange } />
          <label data-testid="select-input-label" htmlFor="">Filtrar por gênero</label>
          <select data-testid="select-input" name="" id="" value={ selectedGenre } onChange={ onSelectedGenreChange }>
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
