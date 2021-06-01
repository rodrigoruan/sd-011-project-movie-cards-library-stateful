import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MovieCardGenre extends Component {
  render() {
    const { handleEvents } = this.props;
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select name="genre" data-testid="genre-input" onChange={ handleEvents }>
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

MovieCardGenre.propTypes = {
  handleEvents: PropTypes.func.isRequired,
};
