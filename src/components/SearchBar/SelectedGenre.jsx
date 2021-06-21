import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectedGenre extends Component {
  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="genre" data-testid="select-input-label">
        Filtrar por gênero
        <select
          name="selectedGenre"
          id="selectedGenre"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          data-testid="select-input"
          className="input"
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}
export default SelectedGenre;

SelectedGenre.propTypes = {
  selectedGenre: PropTypes.bool.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
