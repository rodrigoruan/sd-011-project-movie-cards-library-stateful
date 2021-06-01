import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class GenreSelector extends Component {
  render() {
    const { genre, handleChanges } = this.props;
    return (
      <div>
        <label data-testid="genre-input-label" htmlFor="genre-input-label">
          Gênero:
          <select
            name="genre"
            data-testid="genre-input"
            value={ genre }
            onChange={ handleChanges }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

GenreSelector.propTypes = {
  genre: PropTypes.string.isRequired,
  handleChanges: PropTypes.func.isRequired,
};
