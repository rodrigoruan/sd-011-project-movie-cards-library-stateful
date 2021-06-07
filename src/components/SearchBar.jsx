// implement AddMovie component here

// 1 - Crie um componente chamado <SearchBar />
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    // Aqui eu fiz o destructuring das propriedades
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        {/* 2 - Renderize um formulário dentro de <SearchBar /> */}
        <form data-testid="search-bar-form">

          {/* 3 - Renderize um input do tipo texto dentro do formulário */}
          <label data-testid="text-input-label" htmlFor="searchText">
            Inclui o texto:
            <input
              name="searchText"
              type="text"
              value={ searchText }
              onChange={ onSearchTextChange }
              data-testid="text-input"
            />
          </label>
          {/* 4 - Renderize um input do tipo checkbox dentro do formulário */}
          <label data-testid="checkbox-input-label" htmlFor="bookmarkedOnly">
            Mostrar somente favoritos
            <input
              name="bookmarkedOnly"
              type="checkbox"
              data-testid="checkbox-input"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
          </label>
          {/* 5 - Renderize um select dentro do formulário em <SearchBar /> */}
          <label data-testid="select-input-label" htmlFor="selectedGenre">
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
