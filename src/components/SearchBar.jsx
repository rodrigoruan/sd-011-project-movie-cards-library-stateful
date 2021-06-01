// implement AddMovie component here
import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="">Inclui o texto:
          <input data-testid="text-input" type="text" value={searchText} onChange={onSearchTextChange} />
        </label>
       
        <label data-testid="checkbox-input-label" htmlFor="">Mostrar somente favoritos
        <input data-testid="checkbox-input" type="checkbox" name="" id="" checked={bookmarkedOnly} onChange={onBookmarkedChange} /> 
        </label>
   
       <label data-testid="select-input-label" htmlFor="">Filtrar por gênero
       <select data-testid="select-input" name="" id="" value={selectedGenre} onChange={onSelectedGenreChange} >
         <option data-testid="select-option" value="">Todos</option>
         <option data-testid="select-option" value="action">Ação</option>
         <option data-testid="select-option" value="comedy">Comédia</option>
         <option data-testid="select-option" value="thriller">Suspense</option>
       </select>
       </label>
      </form>
    )
  }
}