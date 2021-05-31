// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
    render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;;

    return (
      <form data-testid="search-bar-form">
          <label htmlFor="TextInput" data-testid="text-input-label">
          Inclui o texto:
          <input id="TextInput" type="text" value= { searchText } onChange = { onSearchTextChange } data-testid="text-input" />
          </label>
          <label htmlFor="Checkbox" data-testid="checkbox-input-label">
          <input
            id="Checkbox" type="checkbox" checked={ bookmarkedOnly } onChange={ onBookmarkedChange } data-testid="checkbox-input" />
          Mostrar somente favoritos
        </label>
        <label htmlFor="SelectInput" data-testid="select-input-label">
          Filtrar por gênero
          <select
            name="searchBarSelectInput"
            id="SelectInput"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
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
}

SearchBar.propTypes = {
    searchText: PropTypes.string.isRequired,
    onSearchTextChange:PropTypes.func.isRequired,
    bookmarkedOnly:PropTypes.bool.isRequired,
    onBookmarkedChange:PropTypes.func.isRequired,
    selectedGenre:PropTypes.string.isRequired,
    onSelectedGenreChange:PropTypes.func.isRequired,

};

export default SearchBar;