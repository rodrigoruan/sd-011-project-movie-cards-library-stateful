import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class GenreForm extends Component {
  // prettier-ignore
  render() {
    const { genre, onChangeHandler } = this.props;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          onChange={ onChangeHandler }
          value={ genre }
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

GenreForm.propTypes = {
  genre: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};
