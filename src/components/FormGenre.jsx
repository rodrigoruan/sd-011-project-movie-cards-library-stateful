import React, { Component } from 'react';

class FormGenre extends Component {
  render() {
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero
        <select data-testid="genre-input" onChange={ genre }>
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

export default FormGenre;
