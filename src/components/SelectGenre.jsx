import React, { Component } from 'react';

class SelectGenre extends Component {
  render() {
    return (
      <label htmlFor="genre">
        Filtrar por gênero:
        <select name="genre" data-testid="select-input">
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

export default SelectGenre;
