import React from 'react';
import PropTypes from 'prop-types';

class AddGenre extends React.Component {
  render() {
    const { genre, handleChange } = this.props;
    return (
      <label
        htmlFor="select-genre"
        data-testid="genre-input-label"
      >
        Gênero
        <select
          value={ genre }
          data-testid="genre-input"
          onChange={ handleChange }
          name="genre"
        >
          <option value="action" data-testid="genre-option">
            Ação
          </option>
          <option value="comedy" data-testid="genre-option">
            Comédia
          </option>
          <option value="thriller" data-testid="genre-option">
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

AddGenre.propTypes = {
  genre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddGenre;
