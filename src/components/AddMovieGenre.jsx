import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieGenre extends Component {
  render() {
    const { genre, changer } = this.props;
    return (
      <label htmlFor="genre-input-label" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          onChange={ changer }
          value={ genre }
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
  changer: PropTypes.func.isRequired,
  genre: PropTypes.string,
};

AddMovieGenre.defaultProps = {
  genre: 'none',
};

export default AddMovieGenre;
