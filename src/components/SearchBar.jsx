import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  inputText() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label
        htmlFor="text-input"
        data-testid="text-input-label"
      >
        Inclui o texto:
        <input
          type="text"
          name="search-text"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
        />
      </label>
    );
  }

  inputCheckBox() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label
        htmlFor="checkbox-input"
        data-testid="checkbox-input-label"
      >
        Mostrar somente favoritos
        <input
          type="checkbox"
          name="search-favorite"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
        />
      </label>
    );
  }

  inputSelected() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label
        htmlFor="select-input"
        data-testid="select-input-label"
      >
        Filtrar por gênero
        <select
          name="search-genre"
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
    );
  }

  render() {
    return (
      <form action="GET" data-testid="search-bar-form">
        { this.inputText() }
        { this.inputCheckBox() }
        { this.inputSelected() }
      </form>
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
