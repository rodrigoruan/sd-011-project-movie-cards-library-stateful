import React from 'react';
import PropTypes from 'prop-types';

class GenreSearch extends React.Component {
  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label
        htmlFor="select-input"
        data-testid="select-input-label"
        className="label-box"
      >
        Filtrar por gênero
        <select
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          data-testid="select-input"
          className="input-box"
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

GenreSearch.propTypes = {
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

GenreSearch.defaultProps = {
  selectedGenre: 'action',
  onSelectedGenreChange: () => {},
};

export default GenreSearch;
