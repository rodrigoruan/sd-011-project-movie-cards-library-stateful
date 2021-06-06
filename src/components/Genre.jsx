import React, { Component } from 'react';

export default class Genre extends Component {
  render() {
    return (
      <select data-testid="genre-input" name="genre" onChange={ this.handlerChange }>
        <label data-testid="genre-input-label">
          Gênero
          <option data-testid="genre-option" value="action" selected>Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </label>
      </select>
    );
  }
}
