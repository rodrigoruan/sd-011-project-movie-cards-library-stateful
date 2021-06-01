import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Genre extends Component {
  render() {
    const { genre, handleChange } = this.props;
    return (
      <div>
        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
          <select
            data-testid="genre-input"
            type="select"
            name="genre"
            value={ genre }
            onChange={ handleChange }
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

export default Genre;

Genre.propTypes = {
  genre: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
