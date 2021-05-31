import React, { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <form action="" data-testid="search-bar-form">
        <label htmlFor="search-text" data-testid="text-input-label">
          Inclui o texto:
          <input type="text" name="search-text" data-testid="text-input" />
        </label>
        <label htmlFor="favoritos" data-testid="checkbox-input-label">
          Mostrar somente favoritos:
          <input type="checkbox" name="favoritos" data-testid="checkbox-input" />
        </label>
        <label htmlFor="gender">
          Filtrar por gênero:
          <select name="gender" data-testid="select-input">
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
