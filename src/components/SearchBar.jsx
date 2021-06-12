import React, { Component } from 'react';

class SearchBar extends Component {
/*
 searchText, uma string
bookmarkedOnly, um boolean
onBookmarkedChange, uma callback
selectedGenre, uma string
onSelectedGenreChange, uma callback
 */
  // onSearchTextChange, uma callback: acho q no material tem um exempl q se encaixa aqui..
  onSearchTextChange() {
    return 1 + 1;
  }

  render() {
    return (
      <form data-testid="search-bar-form">
        Inclui o texto
        <label data-testid="text-input-label" htmlFor="text-input">
          <input
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label>
          <input type="checkbox" name="" id="" />
        </label>
      </form>
    );
  }
}

export default SearchBar;
