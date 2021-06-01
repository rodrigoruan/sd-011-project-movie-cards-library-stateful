import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LabelSelect extends Component {
  render() {
    const { genre, handleState } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero
        <select
          value={ genre }
          data-testid="genre-input"
          id="genre-input"
          name="genre"
          onChange={ handleState }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

LabelSelect.propTypes = {
  genre: PropTypes.string.isRequired,
  handleState: PropTypes.func.isRequired,
};
