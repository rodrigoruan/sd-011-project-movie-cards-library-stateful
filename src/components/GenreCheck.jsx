import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GenreCheck extends Component {
  render() {
    const { genre, handleState } = this.props;
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          type="text"
          name="genre"
          value={ genre }
          onChange={ handleState }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

export default GenreCheck;

GenreCheck.propTypes = {
  genre: PropTypes.string,
  handleState: PropTypes.func,
};

GenreCheck.defaultProps = {
  genre: 'action',
  handleState: () => {},
};
