// implement AddMovie component here
import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="">Inclui o texto:
          <input data-testid="text-input" type="text" value={searchText} onChange={onSearchTextChange} />
        </label>
       
        <label data-testid="checkbox-input-label" htmlFor="">Mostrar somente favoritos
        <input data-testid="checkbox-input" type="checkbox" name="" id="" checked={bookmarkedOnly} onChange={onBookmarkedChange} /> 
        </label>
   
       
      </form>
    )
  }
}