import React from 'react';
import PropTypes from 'prop-types';

class GenreInput extends React.Component {
  render() {
    const { genre, handleInput } = this.props;
    return (
      <div>
        <label
          className="add-label"
          data-testid="genre-input-label"
          htmlFor="genre-input"
        >
          Gênero
          <select
            className="add-input"
            name="genre"
            value={ genre }
            data-testid="genre-input"
            onChange={ handleInput }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

GenreInput.propTypes = {
  genre: PropTypes.string,
  handleInput: PropTypes.func,
}.isRequired;

export default GenreInput;
