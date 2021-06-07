// implement AddMovie component here

// 1 - Crie um componente chamado <SearchBar />
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    // Aqui eu fiz o destructuring das propriedades
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
        {/* 2 - Renderize um formulário dentro de <SearchBar /> */}
        <form data-testid="search-bar-form">
          {/* 3 - Renderize um input tipo texto dentro do formulário em <SearchBar /> */}
          <label data-testid="text-input-label" htmlFor="">Inclui o texto:</label>
          <input type="text" value={ searchText } onChange={ onSearchTextChange } />
          {/* 4 - Renderize um input do tipo checkbox no formulário em <SearchBar /> */}
          <label data-testid="checkbox-input-label" htmlFor="">
            Mostrar somente favoritos
          </label>
          <input
            type="text"
            data-testid="checkbox-input"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
          {/* 5 - Renderize um select dentro do formulário em <SearchBar /> */}
          <label data-testid="select-input-label" htmlFor="">Filtrar por gênero</label>
          <select
            data-testid="select-input"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          />
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
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
