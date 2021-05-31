import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form" action="">
          <label data-testid="text-input-label" htmlFor="">Inclui o texto:
            <input type="text" name="" id="" value={ searchText } onChange={onSearchTextChange} data-testid="text-input"/>
          </label>
          <label data-testid="checkbox-input-label" htmlFor="">
            Mostrar somente favoritos
            <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} data-testid="checkbox-input" />
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
