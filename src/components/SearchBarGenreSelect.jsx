import React from 'react';
import PropTypes from 'prop-types';

class SearchBarGenreSelect extends React.Component {
  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <label
        id="search-bar__select-label"
        htmlFor="search-bar__select"
        data-testid="select-input-label"
      >
        Filtrar por gênero
        <select
          data-testid="select-input"
          id="search-bar__select"
          aria-labelledby="search-bar__select-label"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    );
  }
}

SearchBarGenreSelect.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBarGenreSelect;
