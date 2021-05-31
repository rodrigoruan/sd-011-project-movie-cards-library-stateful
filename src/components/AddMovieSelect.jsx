import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovieSelect extends Component {
  render() {
    const { event, valueProp } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero:
        <select
          value={ valueProp }
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

AddMovieSelect.propTypes = {
  valueProp: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
};
