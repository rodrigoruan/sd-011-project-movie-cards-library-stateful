import React, { Component } from 'react';

class AddMovieGenre extends Component {
  constructor() {
    super();

    this.state = {
      genre: 'action',
    };

    this.createGenre = this.createGenre.bind(this);
  }

  createGenre(event) {
    this.setState({ genre: event.target.value });
  }

  render() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          value={ genre }
          data-testid="genre-input"
          onChange={ this.createGenre }
        >
          <option
            value="action"
            data-testid="genre-option"
          >
            Ação
          </option>
          <option
            value="comedy"
            data-testid="genre-option"
          >
            Comédia
          </option>
          <option
            value="thriller"
            data-testid="genre-option"
          >
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

export default AddMovieGenre;
