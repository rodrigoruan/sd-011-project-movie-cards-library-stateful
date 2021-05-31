import React from 'react';
import PropTypes from 'prop-types';

class GenderSelect extends React.Component {
  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <label data-testid="select-input-label" htmlFor="select-input">
        Filtrar por gênero
        <select
          data-testid="select-input"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
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

export default GenderSelect;

GenderSelect.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
