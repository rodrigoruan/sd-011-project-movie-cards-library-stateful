import React, { Component } from 'react';

export default class AddMovieGenre extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        <select
          id="genre-input"
          data-testid="genre-input-label"
          value={ value }
          onChange={ handleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}
