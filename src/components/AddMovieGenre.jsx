import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovieGenre extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        <select
          id="genre-input"
          data-testid="genre-input-label"
          name="genre"
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

AddMovieGenre.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
