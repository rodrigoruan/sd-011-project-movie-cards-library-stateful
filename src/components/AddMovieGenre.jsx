import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovieGenre extends Component {
  render() {
    const { value, event } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="combobox">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          value={ value }
          onChange={ event }
          id="combobox"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

AddMovieGenre.propTypes = {
  value: PropTypes.string.isRequired,
  event: PropTypes.string.isRequired,
};
