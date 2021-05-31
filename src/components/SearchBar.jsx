import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form" action="">
          <label data-testid="text-input-label" htmlFor="search-field">
            {' '}
            Inclui o texto:
            <input
              type="text"
              name=""
              id="search-fild"
              value={ searchText }
              onChange={ onSearchTextChange }
              data-testid="text-input"
            />
          </label>
          <label data-testid="checkbox-input-label" htmlFor="bookmark">
            Mostrar somente favoritos
            <input
              id="bookmark"
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              data-testid="checkbox-input"
            />
          </label>
          <label data-testid="select-input-label" htmlFor="combobox">
            {' '}
            Filtrar por gênero
            <select
              data-testid="select-input"
              name=""
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
              id="combobox"
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
