import React, { Component } from 'react';

export default class SelecetLabel extends Component {
  render() {
    const { func, value } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="generate">
        Gênero
        <select value={ value } data-testid="genre-input" name="generate" onChange={ func }>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}
