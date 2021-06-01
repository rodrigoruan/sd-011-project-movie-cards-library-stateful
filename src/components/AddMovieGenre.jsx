import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovieGenre extends Component {
  render() {
    const { value, handleInputs } = this.props;

    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero
        <select
          name="genre"
          value={ value }
          data-testid="genre-input"
          onChange={ handleInputs }
        >
          <option data-testid="genre-option" value="action" selected>Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

AddMovieGenre.propTypes = {
  handleInputs: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default AddMovieGenre;
