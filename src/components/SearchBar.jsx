// implement AddMovie component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label" htmlFor="inputText">
            Inclui o texto
            <input
              name="searchText"
              type="text"
              data-testid="text-input"
              id="inputText"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>
          <label data-testid="checkbox-input-label" htmlFor="inputCheckbox">
            Mostrar somente favoritos
            <input
              name="bookmarkedOnly"
              type="checkbox"
              data-testid="checkbox-input"
              id="inputCheckbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
          </label>
          <label htmlFor="inputSelect" data-testid="select-input-label">
            Filtrar por gênero
            <select
              name="selectedGenre"
              id="inputSelect"
              value={ selectedGenre }
              data-testid="select-input"
              onChange={ onSelectedGenreChange }
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

export default SearchBar;
