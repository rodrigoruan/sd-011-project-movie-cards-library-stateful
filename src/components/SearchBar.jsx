// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'porp-type';

class SearchBar extends Component {
  render() {
    const searchBarMovie = {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label data-testid="text-input-label">Inclui o texto:
            <input data-testid="text-input" value={ this.props.searchText } onChange={ this.props.onSearchTextChange }></input>
          </label>
          
          <label data-testid="checkbox-input-label">Mostrar somente favoritos
            <input data-testid="checkbox-input" type="checkbox" onChange={ this.props.onBookmarkedChange }></input>
          </label>

          <label data-testid="select-input-label">Filtrar por gênero
            <select data-testid="select-input" value={ this.props.selectedGenre } onChange={ this.props.onSelectedGenreChange }>
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

SearchBar.PropTypes = {
  serachText: PropTypes.string,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
