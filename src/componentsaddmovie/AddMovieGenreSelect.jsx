import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovieGenreSelect extends Component {
  render() {
    const { event, valueR } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero:
        <select
          value={ valueR }
          data-testid="genre-input"
          id="genre"
          name="genre"
          onChange={ event }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

AddMovieGenreSelect.propTypes = {
  valueR: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
};
