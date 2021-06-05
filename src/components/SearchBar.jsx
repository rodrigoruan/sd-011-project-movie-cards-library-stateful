import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    const { selectedGenre, onSelectedGenreChange } = this.props;
    
    return (
    
      <form>
        <label>Inclui o texto
          <input type="text" onChange={onSearchTextChange}  value={searchText} data-testid="search-bar-form" />
        </label>

        <label>Mostrar somente os favoritos
          <input type="checkbox" onChange={onBookmarkedChange} checked={bookmarkedOnly} />
        </label>

        <label>Filtrar por gênero
          <select onChange={onSelectedGenreChange} value={selectedGenre}>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText:  PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre:  PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired
}

export default SearchBar;

