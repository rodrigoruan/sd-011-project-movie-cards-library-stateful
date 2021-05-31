import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Label from './Label';

export class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <Label
          id="text-input-label"
          name="Inclui o texto:"
          idLabel="text-input-label"
          value={ searchText }
          iOnChange={ onSearchTextChange }
          idI="text-input"
        />
        <label htmlFor="checkbox-input-label" data-testid="checkbox-input-label">
          "Filtrar por gênero"
          <input
            id="checkbox-input-label"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
          <label htmlFor="checkbox-input-label" data-testid="select-input-label">
          Filtrar por gênero
          <select
            id="checkbox-input-label"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="checkbox-input"
          >
            <option selected value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.proTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  searchText: '',
  bookmarkedOnly: '',
  selectedGenre: '',
};

export default SearchBar;
