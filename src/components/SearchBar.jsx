// implement AddMovie component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input" data-testid="text-input-label">
          Inclui o texto:
          <input
            data-testid="text-input"
            value={ searchText }
            type="text"
            onChange={ onSearchTextChange }
          />
        </label>
        <label htmlFor="checkbox-input" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            data-testid="checkbox-input"
            value={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            checked
            />
        </label>
        <label htmlFor="select-input" data-testid="select-input-label">
          Filtrar por gênero
          <select data-testid="select-input" value={ selectedGenre } onChange={ onSelectedGenreChange }>
            <option value="" data-testid="select-option" />
            Todos
            <option value="action" data-testid="select-option" />
            Ação
            <option value="comedy" data-testid="select-option" />
            Comédia
            <option value="thriller" data-testid="select-option" />
            Suspense
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
